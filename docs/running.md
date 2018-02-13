---
id: running
title: How to run your tests
sidebar_label: How to run your tests
---
There are several ways to run your tests with Cypress. Let's go over them all.

## Cypress GUI
![alt-text](/img/cypressGui.png)

- By running ```npx cypress open``` in your project folder, you can open the Cypress GUI application. 
- Use the dropdown in the top-right to select which browser you want to run in. Currently Chrome and Electron are [supported](https://docs.cypress.io/guides/core-concepts/launching-browsers.html#).
- Finally, click one *.js files to run a single test or click the ```Run all tests```-button to launch all of the tests in the project.

> ```npx``` is a helper binary to execute files from the ```/node_modules/.bin/```-folder

## Command line
As your test sets mature you'll probably want to run your tests in headless mode.
You can do this by issuing the command: ```npx cypress run```.
 
By default, this command will use the [Electron browser](https://electronjs.org/). It is packaged with Cypress and thus doesn't have to be installed. On top of that it runs headlessly.

### Running a single test from the CLI

If you want to run a single spec file use the ```--spec```-flag.

```bash
npx cypress run --spec cypress/integration/my_spec.js
```   

There are many more options to configure the CLI runner, have a look at the [official Cypress documentation](https://docs.cypress.io/guides/guides/command-line.html#cypress-run).