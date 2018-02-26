---
id: running
title: Starting the Cypress GUI
sidebar_label: Starting the Cypress GUI
---
There are several ways to run your tests with Cypress. For now we will use the GUI.

![alt-text](../img/cypressGui.png)

- By running ```npx cypress open``` in your project folder, you can open the Cypress GUI application. 
- Use the dropdown in the top-right to select which browser you want to run in. Currently Chrome and Electron are [supported](https://docs.cypress.io/guides/core-concepts/launching-browsers.html#).
- Finally, click one *.js files to run a single test or click the ```Run all tests```-button to launch all of the tests in the project.
NOTE: Unless you've already created a test file, you will only see the demonstration test created by Cypress in this list. 

> ```npx``` is a helper binary to execute files from the ```/node_modules/.bin/```-folder
