---
id: customcommands
title: Using Custom Commands
---
Custom commands work well when you’re needing to describe behavior that’s desirable across **all of your tests**. There are reusable functions that you can execute multiple times in your test without rewriting the steps, but by feeding different data to it.
In the context of our App examples are: 'Login', 'Adding a Song', or using the 'Search' functionality.

## Creating a Custom Command

A good place to define your custom commands is in the ```cypress/support/commands.js``` file. You can create several custom commands in one file, but it is also possible to create seperate files to group logical commands together. If you do this, you need to add these files to the ```cypress/support/index.js``` file. This file is loaded before any of the tests are run, ensuring your reusable functions are available for all your tests. 

1. dajkdj
2. dasjkdjakjs
3. daasdklksds


## Exercise -- Login 

Now do it yourself! Create a new custom command for the Login functionality. Steps you should cover are:
1. Open the baseurl
2. Login using the login screen
3. Verify that you are indeed logged in

## More Information

You can find more details and Examples here: [Cypress documentation.](https://docs.cypress.io/api/cypress-api/custom-commands.html#Syntax)
