const getEmbedUrl = (src?: string, videoId?: string): string => {
  if (videoId) {
    return `https://www.youtube.com/embed/${videoId}`;
  }

  if (!src) {
    return "";
  }

  if (src.includes("/embed/")) {
    return src;
  }

  try {
    const url = new URL(src);

    if (url.hostname === "youtu.be") {
      return `https://www.youtube.com/embed/${url.pathname.slice(1)}`;
    }

    const id = url.searchParams.get("v");

    if (id) {
      return `https://www.youtube.com/embed/${id}`;
    }
  } catch {
    return `https://www.youtube.com/embed/${src}`;
  }

  return "";
};

type VideoPlayerProps = {
  src?: string;
  videoId?: string;
  title?: string;
  instruction?: string;
  compact?: boolean;
  withBottomMargin?: boolean;
};

export const VideoPlayer = ({
  src,
  videoId,
  instruction,
  compact = false,
  withBottomMargin = true,
}: VideoPlayerProps) => {
  const embedUrl = getEmbedUrl(src, videoId);

  // Caso 1: vídeo local (.mp4)

  if (src?.endsWith(".mp4")) {
    return (
      <>
        {instruction && <p className="mb-4 font-bold">{instruction}</p>}

        <video
          className={`
            w-full
            ${withBottomMargin ? "mb-4" : ""}
            rounded-lg
            border
          `}
          controls
        >
          <source src={src} type="video/mp4" />
        </video>
      </>
    );
  }

  if (!embedUrl) {
    return null;
  }

  return (
    <>
      {instruction && <p
        className="
        mb-4
        font-bold
      "
      >
        {instruction}
      </p>}
      <div
        className={`
          w-full
          aspect-video
          border
          rounded-lg
          overflow-hidden
          ${compact ? "min-h-25" : ""}
          ${!compact && withBottomMargin ? "mb-4" : ""}
        `}
      >
        <iframe
          className="
            w-full
            h-full
            border-0"
          src={embedUrl}
          allow="
            accelerometer;
            autoplay;
            clipboard-write;
            encrypted-media;
            gyroscope;
            picture-in-picture
          "
          allowFullScreen
        />
      </div>
    </>
  );
};
