# react-adopt-me

### Setup tooling from scratch

- `npm init -y ` => generate package.json file without any questions
- `npm i -D prettier` => install prettier as dev dependency
- package-lock.json file created to record exact versions currently installed on machine so can use these in production. `npm ci` will install all packages specified in lock file, rather than package.json.
- Add format script to package.json
- Set vscode settings to 'format on save', install prettier extension and update setting 'prettier: require config' to true. The latter setting is telling vscode not to format projects that do not have a .prettierrc file, as this could then change every line of code in project and every line's blame would be updated.
- Add .prettierrc file, and set as {} initially, so will just use prettier's default formatting.
- `npm i -D eslint eslint-config-prettier` => Prettier handles formatting, eslint handles coding style (are all methods being used, accessibility etc.). eslint-config-prettier tells eslint to leave formatting to prettier.
- create and configure .eslintrc.json file
- add lint script to package.json
- add and configure .gitignore file
- `npm i -D parcel-bundler` parcel is min config bundler. Super easy to use, no config required, just point at index.html and figures everything out for bundling ands running application.

### Setup production dependencies

- `npm i react react-dom`
