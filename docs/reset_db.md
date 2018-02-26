---
id: reset_db
title: Resetting the Database
sidebar_label: Reset the database
---

In the next couple of exercises, you are going to create and update items in the songs database. With every Cypress test you run, you will be creating new data.

To clean up the database to its original state we have included a reset DB step into the server package.json.

Now the great thing is that we can call this with a Cypress command.
Cypress has a function to run command line arguments, by calling the function `cy.exec()`. 

Use the code below to reset the database before the all the test have started.

```javascript
  before('', () => {
    cy.exec('npm run seed --prefix ../server').its('code').should('eq', 0)
  })
```