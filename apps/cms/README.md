# Keystone CMS
This is the KeystoneJS CMS for the HCI project work showcase site.

## Configuration
The CMS can be configured by editing the `.env` file in the root of the `apps/cms` directory. The following environment variables can be set (examples are shown below):

```env
DB_URL=postgres://user:password@localhost:5432/dbname
DEFAULT_ADMIN_PW=a-password
DEFAULT_ADMIN_USER=some-username
DEFAULT_ADMIN_EMAIL=a-valid-email
SESSION_SECRET=your-session-secret
```

To spin up a PostgreSQL database, you can use the following command:

```sh
docker run --name dev-postgres -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=postgres --rm -p 5432:5432 -d postgres:13
```

Note that the `DB_URL` environment variable should be set to `postgres://postgres:postgres@localhost:5432/postgres` if you use the above command.

To generate a session secret (for encrypting sessions), you can use the following command:

```sh
openssl rand -hex 32
```