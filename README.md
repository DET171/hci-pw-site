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

		```bash
		yarn dev
		```