---
id: firstTest
title: Open our application
---

For our first test we are going to perform some basic actions with Cypress. We are going to open our application and make sure that we've landed on the correct page.
Cypress works with `Commands`. 

`Commands` let you interact with your application as a user normally would using a browser. You can perform navigation actions, type in text and create assertions. 

To complete this exercise you will need to use at least the following commands:

- ```cy.visit()```
- ```cy.get()```
- ```cy.should()```

## Exercise:
1. After installing Cypress, a folder called "Integration" was created. In this Cypress Integration folder create a new spec file called ```first_test.js``` and copy in the code below:

```
describe('First test', function () {
    
    it('should open the main page', function () {
    // Create your test here

    });
});
```
2. Navigate to the main page by using `cy.visit()` to open our Tab Tracker application. 
You can run your test by saving all the changes you've made and open the Cypress GUI (```npx cypress open```). 

3. Get a (unique) element on the page
Use `cy.get()` to select an element on the page.

3. Assert that this element contains certain attributes
Use `cy.should()` to assert that the element is represented according to your expectations. The goal of your test is to assert that the landing page has been successfully opened. 

### If you get stuck
You can find the three used Commands in this exercise in the Cypress API documentation. Use this documentation to complete your exercise. 
https://docs.cypress.io/api/introduction/api.html

