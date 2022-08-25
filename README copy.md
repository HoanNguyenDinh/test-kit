# Whitelabel Marketplace

### Frontend

- Typescript / React
- CRACO / Vite
- Referral Code User Analytics Tracking

## whitelabel-marketplace folders

```shell
├─ base
│ ├─ components
│ ├─ web3
│ ├─ utils
│ └─ hooks
│
├─ starter-kit
│ ├─ components
│ ├─ pages
│ ├─ routes
│ └─ ...
│
├─ ...
│
```

## Development

- Frontend: https://me-whitelabel-marketplace.herokuapp.com/
- Deployed from develop branch

## ME Previews

This repo is connected to cloudflare, which generates preview pages on push to any branch. See this domain:

- https://whitelabel-marketplace.pages.dev

There is also a Github Actions pipeline which runs on merge to `main`, and builds a direct upload to each whitelabel's preview build:

- https://main-preview.starter-kit-marketplace.pages.dev

## Requirements

- Node.js v16+
- Optionally [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)

## Setup environment

`.env.local`

```sh
# used to connect to backend api
VITE_API_URL=<ME API>
VITE_API_URL_V2=<ME API V2>
VITE_API_RPCPOOL=
VITE_API_KEY=
VITE_BD_API_URL=

# used to set theme name
VITE_BRAND=starter-kit


# used to set creator symbol
VITE_CREATOR_SYMBOL=

# used to set collection symbol
VITE_COLLECTION_SYMBOL=

```

## Getting Started

Generate a new project from this template, clone it, install project dependencies and start hacking:

```sh

$ git clone https://github.com/HoanNguyenDinh/whitelabel-starter-kit.git
$ cd whitelabel-starter-kit
$ npm install
$ npm run dev

```

## How to Deploy

- Ensure that all the environment variables for the target deployment environment (test, prod) found in .env files are up-to-date.
- Finally build and deploy the app by running:

```sh
$ npm run build
```

- To creates a build directory with a production build of your app

## How to Contribute

Anyone and everyone is welcome to contribute. Start by checking out the list of open issues marked help wanted. However, if you decide to
get involved, please take a moment to review the guidelines.

## License
