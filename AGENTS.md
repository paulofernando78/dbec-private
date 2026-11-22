# Workflow & Token Efficiency

- Before creating a new lesson or data file, inspect only one existing sibling file as a structural reference instead of scanning the entire directory.
- Do not run broad searches across `local-media/` unless verifying a specific target path.
- Read only the relevant character sections from [docs/characters.md](docs/characters.md) for the characters actually appearing in the requested scene.

# Content punctuation

- Use straight single quotation marks (`'`) when quoting words, phrases, or examples in content. Never use guillemets (Unicode U+00AB and U+00BB).

# Tailwind CSS

- Links accompanied by a button-style icon must not underline their labels, including on hover or keyboard focus. Preserve a visible keyboard focus outline. Apply this pattern consistently throughout the project.

# Audiobook questions

- Every audiobook section with comprehension questions must include a complete answer key and the shared `AudiobookQuestions` component with its show/hide answers button. Keep answers hidden initially and reveal them independently per section. Apply this to every audiobook, including future additions.

- Use Tailwind's spacing scale for dimensions and spacing instead of arbitrary pixel values. For example, use `min-h-17` for `68px` and `w-15` for `60px` at the default root font size. When the scale cannot express the intended value, use an equivalent relative unit such as `rem`.

# Which One? illustrations

- Use one illustrated scene per word, arranged in equal panels with the same typography and visual scale. Use the A1 Unit 1 Lesson 1 illustration style and create distinct characters for the vocabulary scenes.
- Show only the English word in each panel. Keep definitions, translations, example sentences and exercises in the page content.

# Content data

- Organize page-specific data under `app/data/` using the navbar hierarchy. For example, Language → Vocabulary → Which One? → Accept vs. Except belongs in `app/data/language/vocabulary/which-one/accept-except.ts`.

# Project image style

- Organize new page-specific images under `local-media/images/` using the full navigation breadcrumb as lowercase, hyphenated folders. For example, Language → Vocabulary → Which One? maps to `local-media/images/language/vocabulary/which-one/`. Use the same hierarchy for lesson audio under `local-media/audio/`. The shared dictionary uses the same letter folders across data, images, and audio.

- For every generated course illustration, use the images from A1 Unit 1, Lesson 1 as the mandatory visual reference.
- Preserve their established look: polished 2D semi-realistic digital illustration, clean drawn contours, gently stylized faces, warm colors, soft painterly shading, and detailed environments.
- Keep recurring characters visually consistent with Laura and Eric from that lesson when they reappear.
- Do not generate photorealistic or photographic-looking course art.
- Do not use generic flat-vector or SVG-style artwork as a substitute for lesson images.
- Final course images should be raster assets in AVIF unless the task explicitly requires another format.
- Convert generated source images to AVIF before wiring them into course data; do not leave PNG, JPEG, or SVG as the final lesson asset.
- Encode AVIF assets with Sharp (using the bundled workspace runtime when needed) and verify by decoding them with Sharp after writing; do not use macOS `sips` for AVIF because its output may fail in Chrome.
- Store lesson-specific images only in `local-media/`, inside that lesson's own folder and grouped by the step that consumes them (for example, `local-media/images/learn/course/a1/unit-1/lesson-2-stay-in-touch/get-ready/`). Do not create course assets under `public/media/`.
- Keep everything after `local-media/` identical to its R2 object key. The `media:upload` command uploads `local-media/` to R2, while application code references the asset through `/media/...` (for example, `local-media/images/learn/course/.../image.avif` maps to `/media/images/learn/course/.../image.avif`).
- Before finishing an image task, verify that the file exists under `local-media/` and that its application URL `/media/...` maps to the same relative R2 key.
- Add a cache-version query to every new course image URL, starting with `?v=1`. When replacing an image while keeping the same filename, increment the version (`?v=2`, `?v=3`, and so on) so browsers and the CDN fetch the updated asset.
- Store reusable vocabulary images in the dictionary image collection instead of a lesson folder, using the existing first-letter routing: `/media/images/dictionary/{first-letter}/{filename}.avif`.
- Before adding an image, decide whether it is lesson-specific or reusable vocabulary content and choose the destination accordingly.

## Recurring character continuity

- Use [docs/characters.md](docs/characters.md) as the per-character reference guide, including the generated portrait references. Keep those documentation images in `docs/characters/references/`; they are not lesson assets and must not be uploaded to R2.
- Treat the following descriptions as the canonical character designs for all future course illustrations. When an existing course image is supplied as an identity reference, preserve these traits even if that reference is imperfect.
- Pedro always has naturally black, curly hair, dark-brown eyes, warm medium-tan skin, and a rounded friendly face. He is always clean-shaven: do not give him a mustache, goatee, beard, chin hair, or visible beard shadow. His expressions and posture are open, energetic, and relaxed. A green cap is appropriate in casual outdoor scenes, but it is not mandatory in every context.
- Eric must remain immediately distinguishable from Pedro. Eric has light-brown, slightly wavy hair—never black—blue-green eyes, fair skin with a subtle cool undertone, a longer and narrower face, finer cheekbones, a straighter and narrower nose, and a neat, close-trimmed medium-brown beard (unlike Pedro, who is always clean-shaven).
- Give Eric a contemporary British visual character without caricature. Prefer restrained, polished clothing in navy, dark green, burgundy, charcoal, or other muted colors; suitable pieces include a neat overshirt, sweater, waxed jacket, or overcoat.
- Do not make Pedro and Eric share the same hair color, face shape, skin tone, or overall silhouette. Pedro must remain clean-shaven and should read as warmer, rounder, and more expressive; Eric keeps his close-trimmed beard and should read as cooler, narrower, and slightly more reserved or polished.
- Match each recurring character's clothing to the scene instead of defaulting to office or work attire. In leisure, travel, neighborhood, or outdoor scenes, use varied casual outfits and avoid repeating clothing from earlier lessons unless continuity explicitly requires it. Do not add work accessories such as ID badges, lanyards, tablets, or formal uniforms outside a professional context.
