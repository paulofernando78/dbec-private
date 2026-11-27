#!/usr/bin/env bash

set -euo pipefail

project_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
media_dir="$project_dir/local-media"
meta_dir="$project_dir/.local-tts-cache/meta"
rclone_bin="${RCLONE_BIN:-rclone}"

include_generated=0
list_generated=0
delete_missing=0
rclone_args=()

for argument in "$@"; do
  case "$argument" in
    --include-generated) include_generated=1 ;;
    --list-generated) list_generated=1 ;;
    --delete) delete_missing=1 ;;
    *) rclone_args+=("$argument") ;;
  esac
done

if ! command -v "$rclone_bin" >/dev/null 2>&1; then
  local_rclone="/Users/paulosilva/.local/bin/rclone"

  if [[ -x "$local_rclone" ]]; then
    rclone_bin="$local_rclone"
  else
    echo "rclone was not found. Install it or set RCLONE_BIN." >&2
    exit 1
  fi
fi

if [[ ! -d "$media_dir" ]]; then
  echo "local-media directory was not found: $media_dir" >&2
  exit 1
fi

# O TTS grava direto no R2 com metadata (textHash) que controla a regeneração.
# Subir esses arquivos com rclone apaga essa metadata e congela o áudio, então
# eles ficam de fora por padrão. Os sidecars em .local-tts-cache/meta dizem
# quais arquivos de local-media/audio vieram do TTS.
generated_files=()

if [[ -d "$meta_dir" ]]; then
  while IFS= read -r sidecar; do
    relative="${sidecar#"$meta_dir"/}"
    relative="${relative%.json}"

    for extension in mp3 wav ogg m4a; do
      candidate="$media_dir/audio/$relative.$extension"
      if [[ -f "$candidate" ]]; then
        generated_files+=("/audio/$relative.$extension")
        break
      fi
    done
  done < <(find "$meta_dir" -type f -name "*.json" | sort)
fi

if (( ${#generated_files[@]} > 0 )); then
  echo "Áudios gerados por TTS encontrados em local-media: ${#generated_files[@]}"

  if (( list_generated )); then
    printf '  %s\n' "${generated_files[@]}"
    exit 0
  fi

  if (( include_generated )); then
    echo "Incluindo mesmo assim (--include-generated): eles vão substituir os do"
    echo "R2 e perder a metadata de regeneração."
  else
    echo "Ignorando esses arquivos (o app gera e serve direto do R2)."
    echo "Use --include-generated para subir mesmo assim ou --list-generated para listar."

    filter_file="$(mktemp)"
    trap 'rm -f "$filter_file"' EXIT
    printf '%s\n' "${generated_files[@]}" > "$filter_file"
    rclone_args+=(--exclude-from "$filter_file")
  fi
fi

# copy nunca apaga nada no destino. Com --delete usamos sync, que remove do R2
# o que não existe mais no local. Os prefixos privados (saves de jogo) e os
# áudios gerados por TTS ficam fora da comparação, então nunca são apagados.
command="copy"

if (( delete_missing )); then
  command="sync"
  echo "Modo espelho: arquivos ausentes em local-media serão apagados do R2."
  echo "Privados (game-saves/, tts-cache/) e gerados por TTS ficam de fora."
fi

"$rclone_bin" "$command" \
  "$media_dir" \
  "r2:dbec-media" \
  --exclude ".DS_Store" \
  --exclude "game-saves/**" \
  --exclude "tts-cache/**" \
  --progress \
  ${rclone_args[@]+"${rclone_args[@]}"}
