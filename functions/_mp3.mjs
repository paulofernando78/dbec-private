// Conversão WAV → MP3 dentro do Worker: o Gemini TTS só devolve WAV/PCM
// (24 kHz, 16 bits, mono) e os MP3 de 48 kbps ficam ~10x menores.
const defaultBitrate = 48;

const fourCc = (bytes, offset) =>
  String.fromCharCode(
    bytes[offset],
    bytes[offset + 1],
    bytes[offset + 2],
    bytes[offset + 3],
  );

const readWav = (audio) => {
  const bytes = audio instanceof Uint8Array ? audio : new Uint8Array(audio);
  if (bytes.byteLength < 44) return null;
  if (fourCc(bytes, 0) !== "RIFF" || fourCc(bytes, 8) !== "WAVE") return null;

  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  let offset = 12;
  let format = null;
  let data = null;

  while (offset + 8 <= bytes.byteLength) {
    const id = fourCc(bytes, offset);
    const size = view.getUint32(offset + 4, true);
    const start = offset + 8;

    if (id === "fmt ") {
      format = {
        codec: view.getUint16(start, true),
        channels: view.getUint16(start + 2, true),
        sampleRate: view.getUint32(start + 4, true),
        bitsPerSample: view.getUint16(start + 14, true),
      };
    } else if (id === "data") {
      data = bytes.subarray(start, Math.min(start + size, bytes.byteLength));
      break;
    }

    offset = start + size + (size % 2);
  }

  if (!format || !data) return null;
  if (format.codec !== 1 || format.bitsPerSample !== 16) return null;
  if (![1, 2].includes(format.channels) || !format.sampleRate) return null;

  return { format, data };
};

const toSamples = (data) => {
  const samples = new Int16Array(Math.floor(data.byteLength / 2));
  for (let index = 0; index < samples.length; index += 1) {
    const low = data[index * 2];
    const high = data[index * 2 + 1];
    samples[index] = ((low | (high << 8)) << 16) >> 16;
  }
  return samples;
};

/**
 * @param {ArrayBuffer | Uint8Array} audio
 * @param {number} [bitrate]
 * @returns {Promise<Uint8Array | null>}
 */
export async function wavToMp3(audio, bitrate = defaultBitrate) {
  const wav = readWav(audio);
  if (!wav) return null;

  // Import tardio: só paga o custo do encoder quando existe WAV para converter.
  const lame = await import("@breezystack/lamejs");
  const { Mp3Encoder } = lame.default ?? lame;

  const { format, data } = wav;
  const samples = toSamples(data);
  if (!samples.length) return null;

  const encoder = new Mp3Encoder(format.channels, format.sampleRate, bitrate);
  const frameSize = 1152;
  const chunks = [];

  if (format.channels === 2) {
    const frameSamples = frameSize * 2;
    for (let index = 0; index < samples.length; index += frameSamples) {
      const frame = samples.subarray(index, index + frameSamples);
      const left = new Int16Array(frame.length / 2);
      const right = new Int16Array(frame.length / 2);
      for (let sample = 0; sample < left.length; sample += 1) {
        left[sample] = frame[sample * 2];
        right[sample] = frame[sample * 2 + 1];
      }
      const chunk = encoder.encodeBuffer(left, right);
      if (chunk.length) chunks.push(new Uint8Array(chunk));
    }
  } else {
    for (let index = 0; index < samples.length; index += frameSize) {
      const chunk = encoder.encodeBuffer(
        samples.subarray(index, index + frameSize),
      );
      if (chunk.length) chunks.push(new Uint8Array(chunk));
    }
  }

  const tail = encoder.flush();
  if (tail.length) chunks.push(new Uint8Array(tail));
  if (!chunks.length) return null;

  const total = chunks.reduce((sum, chunk) => sum + chunk.length, 0);
  const mp3 = new Uint8Array(total);
  let position = 0;
  for (const chunk of chunks) {
    mp3.set(chunk, position);
    position += chunk.length;
  }

  return mp3;
}
