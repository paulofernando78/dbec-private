# Teacher Registration + multi-professor

Plano de implementação do registro de professores, da posse de aluno e das cotas.
Regra central: **nenhum dado de progresso do aluno é tocado**. Este documento é o
checklist vivo da feature.

## Garantias (não negociáveis)

- [ ] **Nenhuma tabela de progresso é alterada.** Não tocamos em: `notes`, `calendar_notes`, `calendar_entries`, `lesson_progress`, `page_visits`, `exercise_attempts`, `student_presence`, `ai_tutor_requests`, `ai_tutor_history`, nem nos game saves do R2.
- [ ] **Migration só adiciona colunas** (`ALTER TABLE ADD COLUMN`). Sem `DROP`, sem reconstruir `users`, sem `DELETE`.
- [ ] **Transferência = 1 `UPDATE` em `users.teacher_id`.** O aluno mantém `id`, login, senha e todo o histórico.
- [ ] **Nunca “mover” apagando e recriando aluno** (isso dispararia os `ON DELETE CASCADE`).
- [ ] **Apagar professor não apaga alunos** → `ON DELETE SET NULL` (ficam “sem professor” para reatribuir).
- [ ] **Backup do D1 antes de aplicar** a migration (export / Time Travel).

## Modelo de dados

`users` ganha três colunas (migration 008):

| Coluna | Semântica |
|---|---|
| `is_admin` | `1` = admin. Enxerga todos os alunos, reatribui qualquer um e **não tem cota**. |
| `teacher_id` | Professor responsável. **`NULL` = “sem professor”** — o aluno existe, com o histórico dele, aguardando reatribuição. |
| `student_limit` | Cota de alunos do professor. Ignorada quando `is_admin = 1`. |

`AUTH_USERS` continua sendo o bootstrap do admin (canal privilegiado por variável
de ambiente): entradas com `"role": "teacher"` são admin por padrão;
`"admin": false` cria um professor sem privilégios. No login, o admin recebe uma
linha em `users` (idempotente) para poder ser destino de atribuição — e, se a linha
já existir de antes da migration (nasceu com `is_admin = 0`), ela é **promovida a
admin nesse mesmo login**. Sem isso o admin apareceria como professor comum, com
cota de 10 alunos e editável/removível pela interface.

## Decisões

| # | Decisão | Escolha |
|---|---|---|
| 1 | Aluno sem professor | Grupo **“Sem professor”** no topo do card Student Registration (só admin), não uma rota nova |
| 2 | “Remover aluno” pelo professor | **Desvincular** (`teacher_id = NULL`). Excluir de vez = só admin, com confirmação dupla |
| 3 | Transferir para professor no limite | **Bloquear** com mensagem “X já está com 10/10” |
| 4 | Professor transfere direto | **Sim**, mas só os próprios alunos; admin transfere qualquer um |
| 5 | Alunos atuais no deploy | Migration fica **neutra** (`NULL`); o admin usa **“Atribuir todos a mim”** |
| 6 | `DELETE` de professor | Não bloqueia: avisa quantos alunos ficarão sem professor |

## Fase 0 — Segurança da migração

- [x] `database/migrations/008_add_teacher_ownership.sql`
  - [x] `ALTER TABLE users ADD COLUMN is_admin INTEGER NOT NULL DEFAULT 0 CHECK (is_admin IN (0, 1));`
  - [x] `ALTER TABLE users ADD COLUMN teacher_id INTEGER REFERENCES users(id) ON DELETE SET NULL;`
  - [x] `ALTER TABLE users ADD COLUMN student_limit INTEGER NOT NULL DEFAULT 10;`
  - [x] `CREATE INDEX idx_users_teacher ON users(teacher_id);`
- [x] Atualizar `database/schema.sql` com as mesmas colunas
- [x] **Não** mexer no CHECK de `role` (evita reconstruir a tabela)
- [ ] **Backup do D1** antes de rodar a migration

## Fase 1 — Auth, sessão e escopo por professor

- [x] `functions/_auth.js`: `admin` no `AUTH_USERS`, `userId` e `isAdmin` na sessão (`verifySession` tolera sessões antigas)
- [x] `functions/_ownership.js` (novo): `isAdmin`, `isOwner`, `ensureTeacherUser`, `loadAccessibleStudent`, `loadTeacherCapacity`, `capacityMessage`
- [x] `functions/api/login.js`: bootstrap do admin → linha em D1; professor/aluno do D1 (`role IN ('teacher','student')`, `active = 1`)
- [x] `functions/api/session.js`: devolve `userId` e `isAdmin`
- [x] `app/hooks/useSession.tsx`: `Session` ganha `userId` e `isAdmin`
- [x] `api/students.js`: `GET` escopado por dono (admin vê todos), `POST` grava dono e respeita cota, `PUT`/`DELETE` só nos próprios
- [x] `loadAccessibleStudent` aplicado em: `api/dashboard.js`, `api/notes.js`, `api/notes-live.js`, `api/calendar.js`, `api/calendar-notes.js`, `api/student-report.js`
- [x] `api/dashboard.js`: lista de alunos filtrada por `teacher_id`
- [x] `_presence.js`, `lesson-progress.js`, `game-save.js`, `uno*.js`, `ai-chat.js` não recebem `studentId` de terceiros (são autoescopados por sessão) — verificados, sem alteração

> `loadAccessibleStudent` é a única porta de entrada para dados de aluno: aluno acessa
> somente o próprio registro, professor somente os seus, admin qualquer um. Quem não
> passa recebe **404** (não revela existência).

## Fase 2 — Teacher Registration (API + UI)

- [x] `functions/api/teachers.js` (novo) — `GET` (admin): professores + `student_limit` + contagem de alunos
- [x] `GET` (teacher): só o próprio perfil/limite/cota
- [x] `POST` (admin): cria professor (nome, username, senha, limite) — sempre `is_admin = 0`, `active = 1`
- [x] `PUT` (admin): editar dados / mudar limite / resetar senha (senha em branco mantém) / ativar-desativar
- [x] `DELETE` (admin): desvincula os alunos e remove o professor, devolvendo quantos ficaram sem professor
- [x] Admin não é editável nem removível por estes endpoints (`is_admin = 1` → 403)
- [x] `app/components/content/TeacherForm.tsx` (padrão do `StudentForm`): Nome, Username, Senha, Limite; lista com `3 / 10 alunos`, ativar/desativar e remoção com confirmação
- [x] `app/routes/teacher/dashboard.tsx`: card **Teacher Registration** acima de Student Registration, só se `isAdmin`; título vira “Admin Dashboard”
- [x] `Header.tsx`: o rótulo do cartão de conta passa a **“Admin”** quando a sessão é admin (professor continua “Teacher”, aluno “Full access”) — vêm do mesmo helper em ambos os pontos de render
- [x] Emular os novos endpoints no dev (`vite.config.ts`)

> Limitação do dev: professores criados localmente não conseguem entrar, porque o
> login de dev lê apenas o `AUTH_USERS` do `.dev.vars`. Eles aparecem na lista e
> recebem alunos, mas o login de um professor do D1 só é testável em produção.

## Fase 3 — Alunos: cota, desvincular, transferir

- [x] Grupo **“Sem professor (N)”** no card Student Registration (admin): contagem, seleção de responsável por aluno, **“Atribuir todos a mim”** e **“Atribuir todos a…”**
- [x] `PATCH /api/students` (`teacherId` numérico ou `null` = desvincular) — um único `UPDATE users.teacher_id`
- [x] `StudentForm.tsx`: badge de cota (`3 / 10 students`, admin `no limit`), “Add student” desabilitado no teto com aviso
- [x] Botão **“Remove”** → desvincular (com confirmação inline), nunca apaga
- [x] Botão **“Transfer to…”** (lista de professores, sem o responsável atual; professor no teto fica desabilitado)
- [x] Lixeira de exclusão definitiva só aparece para admin — e o `DELETE` agora é **admin-only no servidor** (professor recebe 403)
- [x] Admin vê o responsável de cada aluno na lista (ele enxerga alunos de outros professores)
- [x] Busca no grupo “Sem professor” a partir de 11 alunos
- [x] **Linhas à prova de largura** (correção pós-deploy): as ações nunca esmagam o nome — a linha usa `flex-wrap`, o nome tem `min-w-40`, o select de transferência tem largura fixa (`w-36`) e as colunas do grid são `minmax(0,1fr)`. Verificado por medição: a 1400px o nome fica com 254px em uma linha; a 1000px as ações descem para a segunda linha; sem transbordo horizontal em nenhuma largura
- [x] **Ações da linha do professor como ícones** (`Eye` / `UserX`-`UserCheck` / `Trash2`), cada uma com `title` (tooltip) e `aria-label`; o estado do professor já aparece escrito na linha (`· inactive`) e o ícone muda entre desativar e ativar
- [x] **Olho abre um modal** com os alunos daquele professor (somente leitura, fecha com Esc, clique no fundo ou no X). A sua própria linha (admin) tem só o olho — “My students”, sem editar/remover

## Fase 4 — Verificação e entrega

- [x] `npm run typecheck` limpo após cada fase
- [ ] `npx prettier --write` — **não rodado de propósito**: o projeto não tem config nem dependência do prettier, então o default (80 colunas) reformataria arquivos não tocados. O estilo dos arquivos novos segue o dos vizinhos
- [x] Teste manual (dev) por papel:
  - [x] admin vê todos os alunos + “Sem professor”
  - [x] professor vê só os seus, sem Teacher Registration, e não abre aluno de outro pela URL (`/api/dashboard`, `/api/notes`, `/api/calendar`, `/api/calendar-notes` → 404/403)
  - [x] limite bloqueia a atribuição no teto (409 `Este professor já está com 2/2 alunos.`); o `POST` de aluno usa a mesma trava
  - [x] atribuir um aluno mantém notas, calendário, progresso e login
  - [x] remover = desvincular (`teacherId = null` → 200), aluno continua no banco; exclusão definitiva por professor → 403
  - [x] remover um professor devolve os alunos para “sem professor” (`unassignedStudents: 2`, 4/4 intactos)
- [ ] **Regressão de progresso (no deploy):** contar linhas de `lesson_progress`, `page_visits`, `exercise_attempts`, `notes` antes/depois de uma transferência (devem ser idênticas). Por construção só `users.teacher_id` muda, mas confirme no banco real
- [ ] Deploy: backup → aplicar migration 008 → deploy functions/app → criar professores → reatribuir alunos antigos

## Como aplicar a migration (é isto que falta fazer)

O banco de produção é o D1 da Cloudflare e **nada neste projeto aplica migration
sozinho**: o arquivo `.sql` precisa ser enviado ao banco uma única vez. No dev
nada disso é necessário, porque o dev usa dados em memória.

**Antes:** faça um backup. Painel → D1 → seu banco → **Time Travel**, ou
`npx wrangler d1 export <nome-do-banco> --remote --output backup.sql`.

### Opção A — pelo painel (sem instalar nada)

1. Cloudflare → **Workers & Pages → D1** → o seu banco → aba **Console**.
2. Cole o conteúdo de `database/migrations/008_add_teacher_ownership.sql`.
3. **Execute**.

### Opção B — pelo CLI

```bash
npx wrangler login          # uma vez, abre o navegador
npx wrangler d1 execute <nome-do-banco> --remote \
  --file=./database/migrations/008_add_teacher_ownership.sql
```

- `<nome-do-banco>` é o nome que aparece na lista de D1 do painel (não é o `database_id`).
- O wrangler não fica instalado: o `npx` baixa na hora.
- Se você tem mais de uma conta, acrescente `--account-id <id>`.

### Conferir se funcionou

```bash
npx wrangler d1 execute <nome-do-banco> --remote --command "PRAGMA table_info(users)"
```

Tem de listar `is_admin`, `teacher_id` e `student_limit`. (No painel, o mesmo
`PRAGMA` no Console serve.)

### Depois

1. **Promova a sua linha de professor** (ela já existe no banco, criada antes desta
   feature, e nasceu com `is_admin = 0`):

   ```sql
   UPDATE users SET is_admin = 1 WHERE role = 'teacher' AND username = 'me';
   ```

   Troque `'me'` pelo seu usuário do `AUTH_USERS` se for outro. O login também faz
   essa promoção sozinho, mas fazer aqui deixa o banco correto desde já.

2. Confira:

   ```sql
   SELECT id, username, role, is_admin, teacher_id, student_limit FROM users ORDER BY id;
   ```

   `me` → `role = teacher`, `is_admin = 1`; alunos → `teacher_id = NULL`.

3. Deploy das functions + app (`npm run deploy`).
4. Entrar como admin → **Teacher Registration** → cadastrar professores.
5. **Student Registration → “Sem professor” → Atribuir a…** para distribuir os alunos atuais.

## Regressão de progresso

Prova de que transferir um aluno não mexe em nenhuma linha de progresso:

```bash
export DBEC_D1_NAME=<nome-do-banco>
./scripts/progress-snapshot.sh before
# transfira UM aluno pela interface (Remove ou Transfer to…)
./scripts/progress-snapshot.sh after
```

O script roda `database/checks/student-progress-snapshot.sql` nos dois momentos e
compara: **progresso tem de sair idêntico** (sai com erro se mudar); só a posse
(`teacher_id`) pode mudar.

Sem CLI: cole o mesmo SQL no Console do painel antes e depois e compare a
primeira tabela.

## Arquivos tocados

**Banco:** `database/schema.sql`, `database/migrations/008_add_teacher_ownership.sql` (novo)

**Functions:** `_auth.js`, `_ownership.js` (novo), `api/login.js`, `api/session.js`, `api/students.js`, `api/teachers.js` (novo), `api/dashboard.js`, `api/notes.js`, `api/notes-live.js`, `api/calendar.js`, `api/calendar-notes.js`, `api/student-report.js`

**App:** `hooks/useSession.tsx`, `routes/teacher/dashboard.tsx`, `components/content/UnassignedStudents.tsx` (novo), `components/content/TeacherForm.tsx` (novo), `components/content/StudentForm.tsx`, `utils/teachers.ts` (novo)

**Dev/config:** `vite.config.ts` (emulação dos endpoints no dev)

## O que NÃO será feito

- Recriar/renomear tabelas
- Apagar aluno ao “remover”
- Tocar em qualquer tabela de progresso
- Criar segundo admin pela UI
- Perder login/senha do aluno na transferência

## Critérios de aceite

1. Você continua entrando como teacher e vendo **Student Registration** normalmente.
2. Você vê **Teacher Registration**; nenhum outro professor vê.
3. Professor só lista/abre/edita os próprios alunos (inclusive digitando URL de outro).
4. Não passa do limite definido por você.
5. Transferir um aluno não muda **nenhuma** linha de progresso.
6. Remover aluno apenas desvincula; nada é apagado.
