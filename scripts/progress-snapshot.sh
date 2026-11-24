#!/usr/bin/env bash
# Prova que transferir um aluno entre professores não altera dado de progresso.
#
# Uso:
#   export DBEC_D1_NAME=<nome-do-banco-no-painel>
#   ./scripts/progress-snapshot.sh before
#   (faça UMA transferência pela interface)
#   ./scripts/progress-snapshot.sh after
#
# O script roda o mesmo SQL nos dois momentos e compara: o bloco de progresso tem
# de sair idêntico; só o bloco de posse (teacher_id) pode mudar.

set -euo pipefail

label="${1:-}"

if [[ "$label" != "before" && "$label" != "after" ]]; then
  echo "uso: $0 before|after" >&2
  exit 1
fi

if [[ -z "${DBEC_D1_NAME:-}" ]]; then
  echo "defina o nome do banco, por exemplo: export DBEC_D1_NAME=dbec" >&2
  exit 1
fi

root="$(cd "$(dirname "$0")/.." && pwd)"
sql="$root/database/checks/student-progress-snapshot.sql"
tmp="${TMPDIR:-/tmp}"

if [[ "$label" == "before" ]]; then
  counterpart="after"
else
  counterpart="before"
fi

out="$tmp/dbec-progress-$label.json"
other="$tmp/dbec-progress-$counterpart.json"

# --json + normalização: guardamos apenas os resultados, porque os metadados do
# wrangler (duração, timings) mudam a cada execução e sujariam a comparação.
npx wrangler d1 execute "$DBEC_D1_NAME" --remote --json --file="$sql" \
  | node -e '
      let raw = "";
      process.stdin.on("data", (chunk) => (raw += chunk));
      process.stdin.on("end", () => {
        const parsed = JSON.parse(raw);
        const results = (Array.isArray(parsed) ? parsed : [parsed]).map(
          (entry) => entry?.results ?? entry,
        );
        process.stdout.write(JSON.stringify(results, null, 2));
      });
    ' > "$out"

echo "snapshot salvo em $out"

if [[ ! -f "$other" ]]; then
  echo "agora rode: $0 $counterpart"
  exit 0
fi

echo
echo "--- comparando com $other ---"

node -e '
  const fs = require("fs");
  const [before, after] = process.argv
    .slice(1)
    .map((file) => JSON.parse(fs.readFileSync(file, "utf8")));
  const section = (snapshot, index) => JSON.stringify(snapshot[index] ?? []);

  const progressSame = section(before, 0) === section(after, 0);
  const ownershipSame = section(before, 1) === section(after, 1);

  console.log(
    progressSame
      ? "PROGRESSO: idêntico — nenhuma linha de progresso mudou."
      : "PROGRESSO: MUDOU — isso não deveria acontecer com uma transferência!",
  );
  console.log(
    ownershipSame
      ? "POSSE: idêntica — nenhuma transferência registrada."
      : "POSSE: mudou — esperado se você transferiu um aluno.",
  );

  if (!progressSame) {
    console.log("\nantes:", section(before, 0));
    console.log("depois:", section(after, 0));
  }

  process.exit(progressSame ? 0 : 1);
' "$other" "$out"
