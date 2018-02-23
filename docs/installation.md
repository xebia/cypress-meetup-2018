---
id: installation
title: Installing Cypress.io
---
To add Cypress as a dependency to your project, goto the 'client'-folder and run `npm install cypress --save-dev`.

The `--save-dev`-flag takes care of the installation of cypress in your package.json . When you share the package.json (via a repository) with other users of the project, they can install the project files by typing 'npm install'. NPM Install checks the package.json to see which packages are mentioned and installs them. If you use 'npm install cypress' (withouth the `--save-dev`-flag), Cypress will not be menthioned in the package.json, thus will not being installed when `npm install` will be run.

You can find the details in the [Cypress documentation.](https://docs.cypress.io/guides/getting-started/installing-cypress.html)
