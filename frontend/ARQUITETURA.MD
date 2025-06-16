### ARQUITETURA.md

```md
# Arquitetura do Projeto Mural de Ideias

## Backend

- _Validação e Proteção de Rotas:_ Utilizei Guards do NestJS para proteger rotas que requerem autenticação. A validação dos dados de entrada é feita com DTOs e Pipes usando `class-validator`.
- _Padrão NestJS:_ Segui o padrão modular com Controllers, Services e Modules para organizar o código, garantindo separação de responsabilidades e testabilidade.

## Frontend (Performance)

- _Estratégia de Renderização:_ Optei por renderização no lado do cliente (client-side rendering) com React e TanStack Query para buscar os dados dinâmicos das ideias. Isso permite atualização rápida da UI após ações do usuário, como votar, sem a complexidade de SSR ou SSG.

## Frontend (Fluxo de Dados)

- Quando o usuário clica em "Votar", o frontend usa uma mutação do TanStack Query para enviar a requisição POST ao backend.
- Após sucesso, o cache da query de lista de ideias é invalidado (`invalidateQueries`), forçando um novo fetch e garantindo que a UI reflita o número atualizado de votos.
- Essa abordagem simplifica o fluxo de dados, mantendo a UI sincronizada com o estado real do backend.

## Decisão Técnica Crítica

A decisão mais difícil foi escolher a estratégia de gerenciamento de estado e dados no frontend. Optei pelo TanStack Query por sua simplicidade e eficiência no cache e atualização automática de dados, o que evita a complexidade de gerenciar estados globais manualmente e torna o app mais responsivo e consistente.
```
