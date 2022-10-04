# Duilo QR Codes - Opensource Testing Version

This is an app I created following the next tutorial available in [Shopify app](https://shopify.dev/apps/getting-started) using Node and React (also Vite, even though is not mentioned here). It contains the basics for building a Shopify app with database and backend steps to completed.

This app allows to the merchants to create QR Codes and assign them to products and discounts quickly and easy. After a QR Code is created, the merchant can send the image with the QR to their customers so they can scan and purchase special promos and discounts.

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

## Getting started

### Requirements

1. You must [download and install Node.js](https://nodejs.org/en/download/) if you don't already have it.
1. You must [create a Shopify partner account](https://partners.shopify.com/signup) if you don’t have one.
1. You must [create a development store](https://help.shopify.com/en/partners/dashboard/development-stores#create-a-development-store) if you don’t have one.

### Installing the template

To install and play with the app, just clone this repo and run `npm run dev`. Follow the process to connect with your partner account and login. Once you connect sucessfully, go to the App Setup and replace the ngrok link provided so you can see the app working on the panel.

## Developer resources

- [Introduction to Shopify apps](https://shopify.dev/apps/getting-started)
- [App authentication](https://shopify.dev/apps/auth)
- [Shopify CLI](https://shopify.dev/apps/tools/cli)
- [Shopify API Library documentation](https://github.com/Shopify/shopify-api-node/tree/main/docs)
- [Author](https://jdevm.com): Jean Manzo
