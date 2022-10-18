# Shopify App PostgreSQL Implementation

This is an app example I created to document the way that I used to implement the PostgreSQL database for my apps, following the [list of Repos available on this link](https://github.com/Shopify/shopify-api-node/tree/main/src/auth/session/storage). After a lot of time reading code and trying to get my head up to this, I figured it out and I'll be sharing with you how to do it. Also, [here](https://jdevm.com) you can see the same implementation using the other examples available there, and of course a step-by-step guide (just Spanish so far).

## Tech Stack
- [Vite](https://vitejs.dev/): Which is a build tool that aims to provide a faster and leaner development experience for modern web projects. Note: I really loved working with this framework, or so. It's so clean and the speed is more than acceptable.
- [SQLITE](https://www.sqlite.org/index.html): SQLite is a C-language library that implements a small, fast, self-contained, high-reliability, full-featured, SQL database engine. Note: My first time working with this amazing database that claims to be the most used database in the world. And based on its simplicity and availability/concurrency, I might think that it is true.
- React: Popular library that allows me create wonderful frontend on my projects.
- NODE: Popular backend server used to run Javascript projects.
- [React Router](https://reactrouter.com/) is used for routing. We wrap this with file-based routing.
- [React Query](https://react-query.tanstack.com/) queries the Admin API.
- [Express](https://expressjs.com/) builds the backend.
- [Shopify API library](https://github.com/Shopify/shopify-node-api) adds OAuth to the Express backend. This lets users install the app and grant scope permissions.
- [App Bridge React](https://shopify.dev/apps/tools/app-bridge/getting-started/using-react) adds authentication to API requests in the frontend and renders components outside of the App’s iFrame.
- [Polaris React](https://polaris.shopify.com/) is a powerful design system and component library that helps developers build high quality, consistent experiences for Shopify merchants.
- [Custom hooks](https://github.com/Shopify/shopify-frontend-template-react/tree/main/hooks) make authenticated requests to the Admin API.
- [File-based routing](https://github.com/Shopify/shopify-frontend-template-react/blob/main/Routes.jsx) makes creating new pages easier.
- [ElephantSQL](https://www.elephantsql.com/): Amazing tool that provides access to a FREE PostgreSQL instance to develop, experiment and build stuff without limitations. I loved when Heroku allowed this BTW, but let's get over of this.

## Getting started

### Requirements

1. You must [download and install Node.js](https://nodejs.org/en/download/) if you don't already have it.
1. You must [create a Shopify partner account](https://partners.shopify.com/signup) if you don’t have one.
1. You must [create a development store](https://help.shopify.com/en/partners/dashboard/development-stores#create-a-development-store) if you don’t have one.

### Installing the template

To install and play with the app, just clone this repo and run `npm run dev`. Follow the process to connect with your partner account and login. Once you connect sucessfully, go to the App Setup and replace the ngrok link provided so you can see the app working on the panel.

## Developer resources

- [Database Connection's Examples](https://github.com/Shopify/shopify-api-node/tree/main/src/auth/session/storage): Provided by Shopify to teach you how to implement this, but without any clarity about specific cases.
- [Introduction to Shopify apps](https://shopify.dev/apps/getting-started)
- [App authentication](https://shopify.dev/apps/auth)
- [Shopify CLI](https://shopify.dev/apps/tools/cli)
- [Shopify API Library documentation](https://github.com/Shopify/shopify-api-node/tree/main/docs)
- [Author](https://jdevm.com): Jean Manzo
