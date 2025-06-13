![Prevenir wallpaper](src/assets/prevenir.png)

### Preveni 1.0

## 🧾 Content

- [👮 Introduction](#-introduction)
  - [📚 About](#-about)
  - [⚙️ Tech stack](#-tech-stack)
- [👋 Getting Started](#-getting-started)
  - [📋 Prerequisites](#-prerequisites)
  - [📦 Running](#-running)
- [👩‍💻 Development](#-development)
  - [🌱 Environment](#-environment)
  - [💅 Styling](#-styling)
- [🛠 Testing](#-testing)
  - [🧹 Static](#-static)
  - [🔨 Unit](#-unit)
- [🚀 Deployment](#-deployment)
  - [🔑 Decrypting keys](#-decrypting-keys)
  - [🏗 Build](#-build)
  - [🚢🇮🇹 Release](#-release)

## 👮 Introduction

### 📚 About

> Prevenir is a support app for individuals recovering from substance addiction, using gamification and
> real-time assistance to help prevent relapses.

### ⚙ Tech stack

- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript
- [React Native](https://reactnative.dev/) - Hybrid mobile development
- [React Navigation](https://reactnavigation.org/) - Routing and navigation
- [Axios](https://www.apollographql.com/docs/react/) - Promise based HTTP client
- [Jest](https://jestjs.io/) - Testing framework
- [Styled Components](https://styled-components.com/) - Creating style for component
- [ESLint](https://eslint.org/) - Static testing
- [Husky](https://typicode.github.io/husky/) - Git hooks

## 👋 Getting Started

These instructions will get you a base project structure and running on your local machine for development and testing purposes.

### 📋 Prerequisites

Setting up the development environment

You can follow the [React Native CLI quickstart](https://reactnative.dev/docs/environment-setup) for your development OS
target OS.

### 📦 Running

Installing Dependencies:

```bash
yarn
```

Installing Pods (only for iOS):

```bash
cd ios && pod install
```

Running the app:

```bash
yarn start
```

For starting the app on a specific OS:

```bash
yarn ios
```

```bash
yarn android
```

## 👩‍💻 Development

These instructions will help you on the development day to day.

### 🌱 Environment

To make it easier we already have some yarn scripts already in place.

- Build and run a debug app with debug settings on Android:

  ```bash
  yarn android
  ```

- Build and run a debug app with debug settings on iOS:

  ```bash
  yarn ios
  ```

- Standardizing code with Husky:

  ```bash
  yarn run husky-setup
  ```

### 💅 Styling

We are using [Styled Components](https://styled-components.com/) for styling.

## 🛠 Testing

These instructions will help you on testing the app and improve code quality.

### 🧹 Static

Eslint is used in the project to enforce code style and should be configured in
your [editor](https://eslint.org/docs/user-guide/integrations). Prettier is also used and apply automatically by eslint.

Typescript is used for type-checking and should be configured in
your [editor](https://github.com/Microsoft/TypeScript/wiki/TypeScript-Editor-Support).

You can check this manually by running:

```bash
yarn lint
```

If you want to try to fix the problems automatically:

```bash
yarn lint:fix
```

### 🔨 Unit

Use the following command to run unit tests:

```bash
yarn test
```

Use the following to update the snapshots of unit tests:

```bash
yarn test -u
```

Use the following to run unit tests in watch mode while developing:

```bash
yarn test --watch
```

## 🚀 Deployment

These instructions will help you on manually deploy the app to stores.

### 🔑 Decrypting keys

### 🏗 Build

### 🚢🇮🇹 Release
