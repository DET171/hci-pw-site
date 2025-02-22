# Keystone CMS
This is the KeystoneJS CMS for the HCI project work showcase site.

## Configuration
The CMS can be configured by editing the `.env` file in the root of the `apps/cms` directory. The following environment variables can be set (examples are shown below):

```env
DB_URL='file:./db/keystone.sqlite3'
DB_PROVIDER=sqlite
DEFAULT_ADMIN_PW=a-password
DEFAULT_ADMIN_USER=some-username
DEFAULT_ADMIN_EMAIL=a-valid-email
SESSION_SECRET=your-session-secret
```

To generate a session secret (for encrypting sessions), you can use the following command:

```sh
openssl rand -hex 32
```