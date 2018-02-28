---
id: project_installation
title: Installing the Node.js Project
sidebar_label: Project Installation
---
## Project overview
The system under test is a tabular music tracker. It consists out of a server part, which interfaces with the database. The more visible part is the client, running in your browser as a VueJS project. We will focus on testing the client with Cypress.io.

Read on to figure out how to run the project on your local machine.

![alt-text](../img/server_client.png)

## Checking out the project
1. Clone the [project from GitHub](https://github.com/xebia/cypress-meetup-2018) 

```
git clone https://github.com/xebia/cypress-meetup-2018.git
```

2. Next we will start both the client and the server.

From the root of the project:
```   
     cd server
     npm install
     npm start 
 ```

In another terminal, run the following:
 ```   
    cd client
    npm install
    npm start 
 ```  
  
 Now go to http://localhost:8080 to check if everything is running correctly.
 
 ## About NPM 
 NPM stands for Node Package Manager. See [npmjs.com](https://docs.npmjs.com/getting-started/what-is-npm#what-is-npm) for more info.
 In both the folders 'server' and 'client' you find a file called package.json.
 This package.json holds all the information (names, versions) about the npm packages that are used in the project. 
 When you start `npm install`, it gathers all the names and versions and tries to install these packages
 from the public NPM repository.
 
 Package.json also stores some executable commands as shortcuts.
 In this case you may find in the package.json a line which states: "start": "node build/dev-server.js",
 so you can type 'npm start' instead of 'node build/dev-server.js'.
