FROM node:22-alpine AS base

FROM base AS builder
RUN apk update
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY . .
RUN yarn dlx turbo prune frontend cms --docker

FROM base AS runner
RUN apk update
RUN apk add --no-cache libc6-compat openssl
WORKDIR /app
# RUN addgroup --system app -g 1001
# RUN adduser --system -u 1001 app
# RUN chown -R app:app /app
# USER app
COPY --from=builder --chown=app:app /app/out/json .
RUN yarn install
COPY --from=builder --chown=app:app /app/out/full/ .
# it doesn't actually need the DB_URL when building as migrations are only applied when the image is started
# its just there to stop it from throwing an error
ENV DB_URL=postgres://postgres:postgres@localhost:5432/postgres
RUN yarn build
# RUN yarn workspace cms keystone prisma migrate dev
VOLUME /app/apps/cms/assets
EXPOSE 5001
EXPOSE 3000
ENV GRAPHQL_API_URL=http://localhost:5001/api/graphql
CMD ["yarn", "start"]