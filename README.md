# IMREA – Teleconsulta (Frontend · Sprint 04)

> SPA (Single Page Application) em **React + Vite + TypeScript**, estilizada **exclusivamente com TailwindCSS**, com entradas validadas via **React Hook Form + Zod**.  
> Reestruturação das páginas da Sprint 02 para uma arquitetura **modular**, **responsiva** e **escalável**, conforme regras da Sprint 03.

---

## 📌 Sumário
- [Visão Geral](#visão-geral)
- [Tecnologias](#tecnologias)
- [Requisitos](#requisitos)
- [Instalação e Execução](#instalação-e-execução)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Rotas e Páginas](#rotas-e-páginas)
- [Componentização](#componentização)
- [Formulários (Hook Form + Zod)](#formulários-hook-form--zod)
- [Estilização (TailwindCSS)](#estilização-tailwindcss)
- [Padrões e Acessibilidade](#padrões-e-acessibilidade)
- [Versionamento (Git/GitFlow) e Entrega](#versionamento-gitgitflow-e-entrega)
- [Checklist de Conformidade](#checklist-de-conformidade)
- [Critérios de Avaliação (mapa)](#critérios-de-avaliação-mapa)
- [Evidências (prints)](#evidências-prints)
- [Observações Importantes](#observações-importantes)
- [Troubleshooting](#troubleshooting)
- [Integrantes](#integrantes)
- [Links](#links)
- [Licença](#licença)

---

## Visão Geral
O projeto **IMREA – Teleconsulta** converte as páginas da Sprint 02 para uma **SPA** moderna em React, priorizando **componentização**, **reutilização**, **acessibilidade** e **responsividade**.  
Páginas incluídas: **Home**, **FAQ**, **Contato**, **Sobre**, **Integrantes** e **Detalhe do Integrante** (rota **dinâmica** por RM).

---

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- **React** (utilizando Vite)
- **TypeScript** (para tipos específicos e segurança)
- **Tailwind CSS** (para estilização)
- **React Router** (para gerenciamento de rotas internas)

## ☁️ Deploy

O deploy da aplicação está hospedado no Vercel e pode ser acessado através do link abaixo:

➡️ **[Link para o seu deploy no Vercel]** (Substitua este texto pelo seu link)
> **Observação:** Para cumprir as regras, **não** utilizamos Bootstrap, Axios, carrosséis prontos, CDNs externas etc.

---

## Requisitos
- **Node.js** 18+  
- **npm** 9+

---

## Instalação e Execução

```bash
# 1) Clonar o repositório
git clone https://github.com/<org>/<repo>.git
cd <repo>

# 2) Instalar dependências
npm i

# 3) Rodar em desenvolvimento
npm run dev
```

Acesse: http://localhost:5173

### Build e Preview
```bash
npm run build
npm run preview
```

---

## Scripts Disponíveis
- `dev` – inicia o servidor de desenvolvimento (Vite)
- `build` – gera o build de produção
- `preview` – serve o build localmente

---

## Estrutura de Pastas
```
.
├─ imrea-teleconsulta
│  └─ node_modules
│  └─ src/
│     └─ assets/
│        └─ img/
│           ├─ healthsync.png
│           ├─ laura.jpeg
│           ├─ maicon.png
│           └─ richard.jpeg
│     └─ components/
│        ├─ Header.tsx
│        ├─ Footer.tsx
│        ├─ UserList.tsx
│        └─ Steps.tsx
│     └─ data/
│        ├─integrantes.ts
│     └─ pages/
│        ├─ Contato/
│           └─ index.tsx
│        ├─ FAQ/
│           └─ index.tsx
│        ├─ Home/
│           └─ index.tsx
│        ├─ Integrante/
│           └─ index.tsx
│        ├─ Sobre/
│           └─ index.tsx
│     └─ routes/
│        ├─ Error/
│           └─ index.tsx
│        ├─ IntegrantesDetalhes/
│           └─ index.tsx
│        ├─ AppRoutes.tsx
│     └─types/
│       └─ index.ts
│     └─ App.tsx
│     └─ main.tsx
│  └─ .gitignore
│  └─eslint.config.js
│  └─index.html
│  └─package-lock.json
│  └─package.json
│  └─READEME.md
│  └─tailwind.config.js
│  └─ tsconfig.app.json
│  └─ tsconfig.json
│  └─ tsconfig.node.json
│  └─ vite.config.ts
│  └─ README.md 
```
---

## Rotas e Páginas
- `/` → **Home**  
  - **Passo a passo da teleconsulta do IMREA** (instalar app, conexão, áudio/vídeo, documentos, antecedência, suporte)
- `/faq` → **FAQ**
- `/contato` → **Contato** (RHF + Zod)
- `/sobre` → **Sobre**
- `/integrantes` → **Integrantes** (lista)
- `/integrantes/:rm` → **Detalhe do Integrante** (**useParams**)

**Navegação SPA** com **React Router**, sem recarregar a página.

---

## Componentização
- **Header** – navegação principal (desktop/mobile)
- **Hero** – destaque da Home
- **Steps** – lista de passos (recebe itens via **props** e tipagem)
- **Footer** – rodapé reutilizável

**Benefícios:** modularidade, reutilização, manutenção facilitada e escalabilidade.

---

## Formulários (Hook Form + Zod)
**Exigência atendida:** entradas de usuário implementadas com **React Hook Form** e **validadas com Zod**.

- **Contato:**
  - Campos: `nome`, `email`, `mensagem`
  - Validação: `nome` obrigatório, `email` válido, `mensagem` obrigatória
  - Comportamento atual: `alert()` de sucesso (sem integração com API nesta sprint)

- **Busca (opcional, se existir no Header):**
  - Campo obrigatório (string não vazia)
  - Pode ser ligada a uma rota de resultados posteriormente

---

## Estilização (TailwindCSS)
- **Apenas TailwindCSS**; sem CSS de terceiros.
- Helpers em `@layer components` dentro de `src/styles/index.css`:
  - `.container-max` – largura máxima e padding horizontal
  - `.btn-cta` – botão de ação
  - `.card` – cartão base
- Paleta do projeto (exemplo): `#006b54` (primária), `#03896c` (secundária).

> **Tailwind v3 (recomendado):**  
> `index.css` usa `@tailwind base; @tailwind components; @tailwind utilities;` e as cores personalizadas ficam em `tailwind.config.js`.

---

## Padrões e Acessibilidade
- **TypeScript** em todo o código; props tipadas.
- **Semântica HTML**: headings hierárquicos, `alt` em imagens, `aria-label` quando preciso.
- **Responsividade**: breakpoints XS/SM/MD/LG/XL com utilitárias do Tailwind.
- **Boas práticas**: evitar `any`, lógica complexa no JSX, preferir componentes puros e funções auxiliares.

---

## Versionamento (Git/GitFlow) e Entrega
- **Workflow sugerido:**
  - `main` (estável)
  - `feature/<nome>` por funcionalidade
- **Commits obrigatórios:**
  - **≥ 5 commits por integrante**
  - **≥ 15 commits no total**
- **Entrega:** enviar **.zip** do repositório **sem `node_modules`** e **com histórico de commits** (apenas branch `main`).
- **README.md**
- **Links:** repositório do GitHub e vídeo do YouTube

---

## Checklist de Conformidade
- [x] **React + Vite + TypeScript**
- [x] **SPA** com **React Router** (rotas estáticas e **dinâmicas**)
- [x] **Componentização / Modularidade / Reutilização**
- [x] **Hooks**: `useState`, `useEffect`, `useNavigate`, `useParams`
- [x] **React Hook Form + Zod** (Contato)
- [x] **TailwindCSS apenas**
- [x] **Páginas obrigatórias**: Home, FAQ, Contato, **Sobre**, Integrantes
- [x] **Git/GitHub/GitFlow** com commits mínimos
- [x] **README.md** completo
- [x] **Entrega .zip** com histórico

---

## Observações Importantes
- **Sem bibliotecas proibidas** (Bootstrap, Axios, carrosséis prontos, etc.).
- Integrações externas via **CDN** foram **desativadas para a entrega** (ex.: Watson Assistant).  
  Após a avaliação, podem ser reativadas em branch separado e documentadas.

---

## Troubleshooting
- **Erro de import do CSS** (`./styles/index.css`): verifique o caminho e a existência do arquivo.  
- **Tela branca**: abra DevTools (F12) → **Console**; cheque `index.html` (root e script), `main.tsx` (Router e import do CSS), `vite-env.d.ts`; confirme nomes e `export default` das páginas.  
- **Tailwind** (v3 recomendado): `postcss.config.js` com `tailwindcss` + `autoprefixer`; `tailwind.config.js` com `content` apontando para `index.html` e `src/**/*.{ts,tsx}`.  
- **Unknown at rule @tailwind** no VSCode: instale **Tailwind CSS IntelliSense** ou defina `"css.lint.unknownAtRules": "ignore"`.  
- **Hook Form/Zod import**: garanta que `react-hook-form`, `zod` e `@hookform/resolvers` estão instalados.

---

## Integrantes
| Nome             | RM     | Turma   | GitHub                                         | LinkedIn                                                                 |
|------------------|--------|---------|------------------------------------------------|-------------------------------------------------------------------------|
| Maicon Douglas   | 561279 | 1TDSPW  | https://github.com/MaiconDouglas-dev           | https://www.linkedin.com/in/maicon-douglas-b244571b5/                   |
| Richard Freitas  | 566127 | 1TDSPW  | https://github.com/vlonerickk                  | https://linkedin.com/in/richard-freitas                                 |
| Laura Lopes Cruz   | 566376 | 1TDSPJW  | https://github.com/Laura853                      |https://www.linkedin.com/in/laura-lopes-a5937a353/                    |

> A página **Integrantes** também exibe Nome, **RM** e **Turma** (requisito obrigatório).

---

## Links
- **Repositório GitHub:** https://github.com/HealthSync-1<org>/<repo>  
- **Vídeo (YouTube):** https://youtu.be/EyIV1OeVQzQ/<id>

---

## Licença
Projeto acadêmico para a disciplina de **Front-end Design Engineering** (Sprint 03).  
