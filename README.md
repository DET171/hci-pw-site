# HCI Project Work Showcase Site
A monorepo for the HCI project work showcase site. This repository contains the code for the frontend (and bff) and the CMS.

## Structure
The repository is structured as follows:
- `apps/cms`: Contains the KeystoneJS CMS

## Development
### Prerequisites
- Node.js
- Yarn

### Setup
1. Clone the repository
2. Install dependencies

		yarn install

3. Configure the respective apps in the `apps/cms` and `apps/frontend` directories (refer to the READMEs in the respective directories) before starting the dev servers.
4. Start dev servers:

		yarn dev

5. Access the CMS at `http://localhost:5001` or refer to the links shown in the terminal after starting the dev servers.
6. Lint and format code:

		yarn turbo format-lint
		# and to apply auto fixes
		yarn turbo format-lint:fix

## Deployment

This application can (as a whole) be deployed with Docker, though how desirable this is is debatable. The Docker image can be built using the following command:

```sh
docker build . -t hci-pw-site
```

The image can then be run with the following command:

```sh
docker run -p 3000:3000 -p 5001:5001 -e DEFAULT_ADMIN_USER=admin -e DEFAULT_ADMIN_EMAIL=admin@hci.edu.sg -e DEFAULT_ADMIN_PW=admin -e GRAPHQL_API_URL=http://localhost:5001/api/graphql -it --rm hci-pw-site
```