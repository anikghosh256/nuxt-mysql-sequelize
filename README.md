# nuxt-mysql-sequelize
CRUD application example using Nuxt JS 3, Sequelize, and MySQL.


## I'm using bootstrap 5 cdn for basic styling
So you have to remove the bootstrap cdn link from main.css file and add your own css file or install library.

## Update Database connection

You will find the connection details in config/config.json file. Then you have to run migration command.
```
npx sequelize-cli db:migrate
```



## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/guide/deploy/presets) for more information.
