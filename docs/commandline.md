---
id: commandline
title: Using the commandline
sidebar_label: Using the commandline
---

As your test sets mature you'll probably want to run your tests in headless mode.
You can do this by issuing the command: ```npx cypress run```.
 
By default, this command will use the [Electron browser](https://electronjs.org/). It is packaged with Cypress and thus doesn't have to be installed. On top of that it runs headlessly.

![alt-text](http://localhost:3000/img/setup-tests.37a99697.gif "img")

### Running a single test from the CLI

If you want to run a single spec file use the ```--spec```-flag.

```bash
npx cypress run --spec cypress/integration/my_spec.js
```   
### Exercises



There are many more options to configure the CLI runner, have a look at the [official Cypress documentation](https://docs.cypress.io/guides/guides/command-line.html#cypress-run).

