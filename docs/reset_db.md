---
id: reset_db
title: Resetting the Database
sidebar_label: Reset the database
---

In the next couple of exercises, you are going to create and update the songs database. Because with every letter you type cypress starts its test over and over so you will be creating new data everytime a test runs.

To clean up the database to its original state we have included a reset DB step into the server package.json.

Now the great thing is we can run this with a cypress command.
Cypress has a function to run command line arguments for this, you can use the function cy.exec(). 

Down below is how you can use the cy.exec() to reset the database before the all the test have started.

```javascript
  before('', () => {
    cy.exec('npm run seed --prefix ../server')
  })
```