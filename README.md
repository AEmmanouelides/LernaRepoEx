# Pokemons - Lerna MonoRepo Project with Next.js

This project was bootstrapped with [Lerna](https://lerna.js.org/).

## Notes
- The Project contains 3 packages:
    - components
    - utils
    - pokedex 
- `components` contains reusable React components
- `utils` contains utilities for data fetching and interfaces
- `pokedex` contains the main functionality of the <a href="https://nextjs.org/" rel="nofollow" target='_blank'>Next.js</a> project
- `Typescript`, `Redux` and `MUI` were used
- Pokemons are fetched into app with build-in `fetch` api and are displayed in the screen with the `@mui/x-data-grid`
- `Jest` Unit Tests were set to run for `components` package
- For client-side routing, the `next/router` was used
- <a href="https://storybook.js.org/" rel="nofollow" target='_blank'>`Storybook`</a> UI tool was installed in the main project for development, testing, and documentation purposes of `components` package. 
    -Some basic configuration were done for `Header`, `Grid` and `Pokemon` react components
- `lerna-dockerize` package was installed to generate a dockerfile for lerna project.
- `Screenshots` of the running project and Storybook can be found at `/screenshots`

## Available Scripts

In the project directory, you can run:

### `bootstrap`

Installs the dependencies for all of the packages in the repository and links any cross-dependencies.

### `build`

Builds all of the packages in the repository, in parallel.

### `start`

Runs the project on port :3000

### `build-storybook`

Builds a static version of a Storybook instance.

### `storybook`

Starts the Storybook instance on port :6006

### `lerna-dockerize`

Builds Docker images for the packages in a monorepo managed by Lerna.