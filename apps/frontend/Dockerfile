FROM node:22-alpine AS base

FROM base AS builder
RUN apk update
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY . .
RUN yarn dlx turbo prune frontend --docker

FROM base AS runner
RUN apk update
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY --from=builder /app/out/json .
RUN yarn install --immutable
COPY --from=builder /app/out/full/ .
RUN yarn build
WORKDIR /app/apps/frontend/
CMD yarn start