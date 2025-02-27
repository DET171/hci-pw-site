FROM node:22-alpine AS base

FROM base AS builder
RUN apk update
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY . .
RUN yarn dlx turbo prune cms --docker

FROM base AS runner
RUN apk update
RUN apk add --no-cache libc6-compat openssl
WORKDIR /app
COPY --from=builder /app/out/json .
RUN yarn install
COPY --from=builder /app/out/full/ .
RUN yarn build
WORKDIR /app/apps/cms/
RUN yarn keystone prisma migrate deploy
EXPOSE 5001
ENV DEFAULT_ADMIN_USER=admin
ENV DEFAULT_ADMIN_PASSWORD=admin
ENV DEFAULT_ADMIN_EMAIL=admin@hci.edu.sg
CMD ["yarn", "start"]