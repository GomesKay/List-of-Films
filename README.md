<h1 align="center">List of Films</h1>

<img src="https://github.com/user-attachments/assets/ce3a0143-38cc-44ef-970f-1f7688e1a5f1" alt="Tela da Aplicação" />

<h2 align="center"> 💻 Instalação e Uso</h2>

> [!NOTE]
> Esse projeto foi separado em duas pastas (<b>back-end</b> e <b>front-end</b>), então será necessário deixar um terminal aberto para cada pasta

### 🛠️ Pré-requisitos
  - Docker
  - Git
  - Node.js
  - NPM
  - VSCode

  | Passos | Comandos | Descrição |
  | --- | --- | --- |
  | 01 | `git clone https://github.com/GomesKay/List-of-Films.git` | Clona este repositório no seu computador |
  | 02 | `cd list-of-films` | Acesse a pasta do projeto |
  | 03 | `cd back-end` | Acesse a pasta `back-end` pelo terminal |
  | 04 | `npm install` | Instala todas as dependências necessárias |
  | 05 | `docker compose up -d` | Sobe o container com o PostgreSQL (Banco de Dados) |
  | 06 | `DATABASE_URL="postgresql://docker:docker@localhost:5432/movies?schema=public"` | Copie o `.env.example` e insira a `DATABASE_URL` no `.env` com a string de conexão |
  | 07 | `npx prisma migrate dev` | Executa as migrations para criar as tabelas no banco de dados |
  | 08 | `npm run dev` | Inicia o servidor em modo desenvolvimento |
  | 09 | `cd front-end` | Em outro terminal, com a API já em execução, acesse a pasta `front-end` |
  | 10 | `npm install` | Instala todas as dependências necessárias |
  | 11 | `npm run dev` | Inicia o servidor de desenvolvimento com Vite |

<div align="center">

  ## ⚙️ Back-end

  ### 🔧 Arquitetura da API

  | HTTP | Rotas | Descrição |
  | --- | --- | --- |
  | `GET` | /movies | Retorna todos os filmes |
  | `POST` | /movies | Cria um novo filme |
  | `PUT` | /movies/:id | Atualiza um filme |
  | `DELETE` | /movies/:id | Deleta uma filme |

  ### 🚀 Tecnologias
  <img title="Biome" src="https://github.com/user-attachments/assets/ca50003f-5d35-4299-9474-30b305ae07cb" alt="Biome" width="50" /> &nbsp;
  <img title="Bruno" src="https://github.com/user-attachments/assets/1ce4b553-394d-4407-a8d4-1970f619347e" alt="Bruno" width="50" /> &nbsp;
  <img title="Docker" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" alt="Docker" width="50" /> &nbsp;
  <img title="Express" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" alt="Express" width="50" /> &nbsp;
  <img title="Node.js" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" alt="Node.js" width="50" /> &nbsp;
  <img title="PrismaORM" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg" alt="PrismaORM" width="50" /> &nbsp;
  <img title="PostgreSQL" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" width="50" /> &nbsp;
  <img title="TypeScript" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="TypeScript" width="50" /> &nbsp;
  <img title="Zod" src="https://github.com/user-attachments/assets/bb33ed33-2e91-473c-9494-41386bf5111f" alt="Zod" width="50" />

  ---

  ## 🖥️ Front-end

  ### 🚀 Tecnologias
  <img title="Axios" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain.svg" alt="Axios" width="50" /> &nbsp;
  <img title="Lucide React" src="https://github.com/user-attachments/assets/779e5ab7-63a5-489d-aa13-b42ccfccd9ac" alt="Lucide React" width="50" /> &nbsp;
  <img title="ESLint" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/eslint/eslint-original.svg" alt="ESLint" width="50" /> &nbsp;
  <img title="Prettier" src="https://github.com/user-attachments/assets/67a609b6-d4d4-4c89-9ab1-154b56c61289" alt="Prettier" width="50" /> &nbsp;
  <img title="React.js" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React.js" width="50" /> &nbsp;
  <img title="Shadcn/ui" src="https://github.com/user-attachments/assets/d4faa79c-ae66-4fe5-adfe-377ddb62ee62" alt="Shadcn/ui" width="50" /> &nbsp;
  <img title="Magic UI" src="https://github.com/user-attachments/assets/99521a26-00dd-4d4d-91ab-10d7e6731581" alt="Magic UI" width="50" /> &nbsp;
  <img title="TailwindCSS" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="TailwindCSS" width="50" /> &nbsp;
  <img title="TypeScript" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="TypeScript" width="50" /> &nbsp;

</div>
