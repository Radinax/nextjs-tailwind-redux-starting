# NextJS Tailwind and Storybook starter

The goal of this repository is to use it as base for my article about setting up a NextJS application with Tailwind and Storybook.

This is a boilerplate but also a guide on how to build the base of a scalable project and the logic behind each choice.

Visit the site here (insert URL)

Check my article where I go in depth here (insert URL)

## Table of Contents

- [Installing](#installing)
- [Folder Structure](#folder-structure)
- [Developing](#developing)
  - [Built With](#build-with)
- [Setting up dev](#setting-up-dev)
- [Setting up storybook](#setting-up-storybook)
- [Contributing](#contributing)
- [Routes](#routes)
- [Tests](#tests)
- [Style guide](#style-guide)
- [Api Reference](#api-reference)
- [Future Improvements](#future-improvements)

## Installing

To start running the project.

```shell
npm install
```

Which will show in port `https://localhost:3000`.

## Folder Structure

```shell
project/
├── .next
├── .storybook/
│   ├── main.js
│   └── preview.js
├── api/
│   └── counterApi.ts
├── components/
│   ├── Button/
│   │   ├── Base.tsx
│   │   ├── Button.stories.tsx
│   │   └── index.ts
│   └── Counter/
│       └── Counter.tsx
├── config/
│   └── store.ts
├── hooks/
│   └── redux.ts
├── pages/
│   ├── api/
│   │   └── counter.ts
│   ├── _app.tsx
│   └── index.tsx
├── public/
│   └── favicon.ico
├── reducers/
│   ├── counterSlice.ts
│   └── rootReducer.ts
├── styles/
│   └── globals.scss
├── .gitignore
├── next-env.d.ts
├── next.config.js
├── package.json
├── postcss.config.js
├── README.md
├── tailwind-preset.config.js
├── tailwind.config.js
└── tsconfig.json
```

## Developing

### Built With

- [React](https://reactjs.org/) due to the virtual DOM it makes fast operations and updates of the UI.
- [NextJS](https://nextjs.org/) for performance, SSR and SEO.
- [Tailwind](https://tailwindcss.com/) enhances development process by creating very customizable components.
- [TypeScript](https://www.typescriptlang.org/) due to its capacity of making all the data is correctly used, while potentially letting the developers know what future problem might arise due to a falsy value.
- [Hero Icons](https://github.com/tailwindlabs/heroicons) for icons from the creators of Tailwind.
- [Storybook](https://storybook.js.org) for component visualization.
- [Redux Toolkit](https://redux-toolkit.js.org/) offers State Management which handles large quantities of data and makes it available to all the application.

## Setting up Dev

To get the project running:

```shell
git clone https://github.com/radinax/nextjs-tailwind-starting.git
cd nextjs-tailwind-starting/
npm install
npm run dev
```

### Setting up storybook

```shell
npm run storybook
```

## Contributing

Create a branch called `feature/[name associated with your feature]` or `bugfix/[name of bug]`. And create a PR to `develop`.

Only the authorized colaborators can merge to `main` branch.

## Routes

Insert routes here

## Tests

For unit testing:

```shell
npm run test
```

For E2E testing:

```shell
npm run cypress:open
```

Which will open a GUI which shows the testing of the app.

## Style guide

// Insert your available style guide links here

## Api Reference

Insert the endpoints here alongside their respective Types. If there are too many, just list them and use a tool like Swagger to check them in depth.

---

<p align="center">Developed by <b>Engineer Adrian Beria</b> :simple_smile:</p>
