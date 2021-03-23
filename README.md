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
- `npm i -D parcel-bundler` parcel is min config bundler. Super easy to use, no config required, just point at index.html and figures everything out for bundling ands running application. Parcel has babel built in which will transformations of jsx.
- `npm install -D babel-eslint eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react` => These tools are added to make sure our project understands React correctly. `babel-eslint` allows eslint be augmented by babel (the transpiler) so can better interpret React code. `eslint-plugin-import` gives new rules around importing and exporting. `eslint-plugin-jsx-a11y` (ally = accessibility) includes rules of things not to do for accessibility i.e. don't make div's clickable. `eslint-plugin-react` helps with some additional React rules for our project.
- `npm i -D eslint-plugin-react-hooks` => official rules from the React team about writing hooks
- `https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en` => React Developer Tools for Chrome
- `npm install -D cross-env` => see https://btholt.github.io/complete-intro-to-react-v5/effects

### Setup production dependencies

- `npm i react react-dom`

### JSX

- Anything that is a JS expression (i.e. can be assigned to a variable) can be used inside of JSX. Example: Can use ternary (expression) but cannot use if (statement).
