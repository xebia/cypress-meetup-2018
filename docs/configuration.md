---
id: configuration
title: Configuration
sidebar_label: Configuration
---
The only config for Cypress is located in a ```cypress.json```-file in the root of your project. Because Cypress has a very sane set of defaults you can get pretty far with a configuration file that looks like this:
```json
{}
```

But as you start running your tests on multiple environments or have increasing demands for the reports of your tests, you may want to look into the configuration a bit further.

### baseUrl
Running the same tests on multiple environments requires, at the very least, a sane way to inject the base URL for your application into your tests.
During this workshop we will always use localhost, so lets configure that now in our ```cypress.json```.

```json
{
  "baseUrl": "http://localhost:8080"
}
``` 

If later the needs arises to run these tests against a different environment you can [override](https://docs.cypress.io/guides/references/configuration.html#Overriding-Options) the baseUrl.

You can either use an environment variable or pass the ```--config```-flag when calling cCypress.

## Official documentation
Visit [the documentation page](https://docs.cypress.io/guides/references/configuration.html) for Cypress configuration to see all the options available to you. 