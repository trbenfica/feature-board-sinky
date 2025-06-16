# Mural de Ideias

## Instalação e Execução

### Requisitos

- Node.js (versão 18 ou superior recomendada)
- Docker e Docker Compose (para rodar backend e banco via container)

---

### Backend

1. Navegue até a pasta `backend`:

   ```bash
   cd backend
   ```

2. Instale as dependências:

```bash
npm install
```

3. Rode a aplicação com Docker Compose:

```bash
docker compose up --build
```

O backend estará disponível em http://localhost:3001.

### Frontend

1. Navegue até a pasta `frontend`:

   ```bash
   cd frontend
   ```

2. Instale as dependências:

```bash
npm install
```

3. Rode com:

```bash
npm run dev
```

O frontend estará disponível em http://localhost:3000.

## Estrutura do Projeto

- /backend: API feita com NestJS + Prisma + SQLite.
- /frontend: Frontend feito com Next.js (App Router) + React + TanStack Query.
