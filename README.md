# Cypress

Repo dedicated to cypress testing

Scope of testing: Functionality and appearance of website: https://the-internet.herokuapp.com/
 
----------------------------------------------
|           Ιn order to execute tests        |
----------------------------------------------
 
[Install typescript]
```command
$ npm install typescript --save-dev
$ tsc -init to creat tsconfig.json

```
[Add in tsconfig.json]
```json
 "target": "es5",
       "lib": ["es5", "dom"],
       "types": ["cypress"]
     "include": [
       "**/*.ts",
       "node_modules/@types/jest/index.d.ts"
     ]
```
[Add in package.json]
```json
{
  "name": "cypress_project",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "supportFile": "cypress/support/index.ts",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "cy:open": "npx cypress open"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "jest": "^27.3.1",
    "typescript": "^4.5.2"
  },
  "dependencies": {
    "@types/jest": "^27.0.3"
  }
}
```
