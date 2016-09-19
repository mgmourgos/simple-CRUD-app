##To run app

For development (all local):<br/>
- npm run dev
- mongod

goto url: localhost:8080

## Setup

- Download this repo into a folder
- run 'npm install' to install dependencies

## Install commands (for reference)

npm i -S express

npm i -g webpack
npm i -g webpack-dev-server

npm i -D webpack webpack-dev-server
npm i -D babel-loader babel-preset-es2015

npm i -S angular angular-ui-router
npm i -D raw-loader

npm i -D css-loader style-loader sass-loader node-sass autoprefixer-loader

npm i -S bootstrap-sass jquery
npm i -D bootstrap-loader url-loader file-loader resolve-url-loader imports-loader

npm i -S lodash

npm i -S mongoose kerberos body-parser

##npm argument reference

- -S: Package will appear in  dependencies<br/>
- -D: Package will appear in devDependencies<br/>
- -g: Installs package as global package

## Todo

 - Add 'date' field for each todo element
 - Change view to display todos sorted by date

## Other notes

Because of babel all js files in ./src use ES6
  (including config.js)

config.js contains angular routing settings

This simple app uses a localhost mongodb database;
