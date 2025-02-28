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

This application can (as a whole) be deployed with Docker, though how desirable this is is debatable. Open up `docker-compose.yaml` and configure the `volumes`, `environment`, and `ports` as desired. Then run:

```
docker-compose up
```

This will build and run the application in a container, together with a PostgreSQL database. The application will be accessible at the ports configured in the `docker-compose.yaml` file.