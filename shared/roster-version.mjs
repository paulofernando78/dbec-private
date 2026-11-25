// Assinatura barata da lista de alunos/professores.
//
// O painel do professor consulta esta assinatura em intervalos curtos e só faz o
// download completo da lista quando ela muda. Assim a latência para enxergar um
// aluno criado por outro professor é de segundos, sem baixar a lista inteira a
// cada ciclo.

export const ROSTER_POLL_MS = 5_000;

const fnv1a = (value) => {
  let hash = 0x811c9dc5;

  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 0x01000193) >>> 0;
  }

  return hash.toString(16).padStart(8, "0");
};

/**
 * Muda quando algo visível na lista muda: aluno criado/removido/renomeado,
 * aluno transferido ou desvinculado (horário e responsável incluídos), professor
 * criado/removido/editado (nome, limite, ativo).
 *
 * A presença (online/offline) fica de fora de propósito: ela muda o tempo todo e
 * é atualizada pelo ciclo completo da lista.
 *
 * @param {string[]} students chaves estáveis de "aluno" (id, responsável e o que a linha mostra)
 * @param {string[]} teachers chaves estáveis de "professor"
 */
export const rosterSignature = (students, teachers) =>
  fnv1a(`${[...students].sort().join("|")}::${[...teachers].sort().join("|")}`);
