# A React Starter Template for the Impatient Developer

This template provides a boilerplate setup to get React working in Vite with HMR.

Use **Yarn** for package management. 

### Includes:
- **Biome** for linting and formatting (nstead of eslint & prettier)
- Typescript
- **Tailwind v4** + DaisyUI v5 for styling
- **Tanstack Router** for file based routing
- **Tanstack Query** for data fetching and caching
- **PWA** support enabled by default
- Basic Auth Provider + Auth Routes setup that you can update as per requirement

### Usage
Run the command to clone the repo without git history.
```sh
# Run the command to clone the repo without git history.
npx degit paras594/react-starter-template <YOUR_PROJECT_NAME>

cd <YOUR_PROJECT_NAME>

# get rid of .gitkeep files 
npx del-cli del **/.gitkeep

# initialize git
git init

# connect to github
git remote add origin <GIT_REPO_URL>
```


### Commands
```sh
# install dependencies during development
yarn

# install dependencies in production 
yarn install --frozen-lockfile --non-interactive --production

# start dev server on port 3000
yarn dev

# format files
yarn format

# lint 
yarn lint

# build
yarn build

# preview the created build
yarn preview
```

### Notes
- In case you want to use **NPM**, update `engines` entry in `package.json` and delete `yarn.lock`.
- If you want ESLint + Prettier then you can use vite template from their docs. Rest of the setup remains same. 


### Useful references
- [Daisy UI Components](https://daisyui.com/components/button/)
- [Tanstack Example with React Query and File based routing](https://tanstack.com/router/latest/docs/framework/react/examples/kitchen-sink-react-query-file-based)
- [Authenticated Routes](https://tanstack.com/router/latest/docs/framework/react/examples/authenticated-routes)
- [Data fetching using Tanstack Query](https://tanstack.com/query/latest/docs/framework/react/quick-start)
- [Firebase Auth Docs](https://firebase.google.com/docs/auth/web/start#web)
