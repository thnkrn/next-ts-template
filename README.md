# Next.js Template - Targeted for client-side

The main aim of this template is to be able to start on **Client-side** only website as quick as possible with great DX.

## Template Structure

- [Volta](https://docs.volta.sh/guide/) is supported and recommended for Node version management.
- Bootstrapped with [Create Next App](https://nextjs.org/docs/api-reference/create-next-app) and its typescript template.
- UI Library: targeted built app to be powered by [Preact](https://preactjs.com/) and use [React](https://reactjs.org/) for development for better debugging.
- Styling: use [CompiledCSS](https://compiledcssinjs.com/), provides atomic css generation, with no runtime cost, on build and common development API, similar to other CSS in JS libraries.
- Linting configuration based on [Create Exposed App](https://github.com/iamturns/create-exposed-app) with personal modification.
- Editor - VSCode with format on save by [Prettier](https://prettier.io/) + fix all with [Eslint](https://eslint.org/).
- Suggested Node version 16+.
- Git hook integrated with [Husky](https://typicode.github.io/husky).
- Pre-commit #1: Uses [Commitlint](https://commitlint.js.org/) for consistent commit messages.
- Pre-commit #2: Uses [Lint Staged](https://github.com/okonet/lint-staged) to run `npm run lint`, `npm run prettier` and `npm run test:staged` on staged files.

## Available Scripts

In the project directory, you can run:

### `npm ci`

Installs the packages.

### `npm start`

Runs the **Next.js** development mode (SSR).\
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the **Jest** test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run test:ci`

Launches the **Jest** test runner and collect code coverage.\
The coverage result will be in the `coverage` folder.

### `npm run build`

Builds the app for production to the `.next` folder.\
It correctly bundles **Preact** in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.

### `npm run export`

Exports the build from `npm run build` step to a static web contents, enable client-side only deployment.
The output will be in the `out` folder.

### `npm run analyze`

Builds the app in production mode and analyze the js bundles.
The analysis result will be in `.next/analyze` folder.
