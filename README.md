

# MercadoLivre

I chosen start this project with nx.dev, for faster and organized development the backend and frontend monorepo. Who allow run and share some code across applications.

## Monorepo Framework
This project was generated using [Nx](https://nx.dev).\## Generate a library

## Frontend
The `apps/store` frontend was make using React/Next.js frameworks to assurance SEO optiomization.
## Backend
The `apps/api` backend use Express framework to make available and api who consume mercado-livre api and treat some responses to frontend apps.
## Development server

Run `nx run-many --target=serve --projects=api,store --parallel` for a dev server.

## Build

Run `nx build api` to build the project backend. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

Run `nx build store` to build the project frontend. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `nx test store` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e store` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.
