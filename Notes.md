## commands 

```bash
## init project
npm init -y

## create typescript config
npx tsc --init

## dependencies
npm install @prisma/client fastify fastify-zod zod zod-to-json-schema fastify-jwt fastify-swagger

## devDependencies
npm install ts-node-dev typescript @types/node -D

## Initialise prisma
npx prisma init --datasource-provider postgresql

### Migrate the schema
npx prisma migrate dev --name init

```