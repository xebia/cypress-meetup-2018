---
id: project_installation
title: Installing the Node.js Project
sidebar_label: Project Installation
---
## Project overview
![alt-text](/img/server_client.png)

1. clone project: `git clone git@github.com:xebia/cypress-meetup-2018.git`

2. enter the following on your commandline
 

 to start the server:
 ```   
     cd server
     npm install
     npm start 
  ```

 to start the client:
 ```   
    cd client
    npm install
    npm start 
 ```  
  
 
 ## some explenatory proza: 
 NPM stands for Node Package Manager. See [link](https://docs.npmjs.com/getting-started/what-is-npm#what-is-npm) for more info.
 In both the folders 'server' and 'client' you find a file called package.json.
 This package.json holds all the information (names, versions) about the npm packages that are used in the project. 
 When you start `npm install`, it gathers all the names and versions and tries to install these packages
 from the NPM repository stored on the interwebs.
 
 Package.json also stores some executable commands as shortcuts.
 In this case you may find in the package.json a line which states: "start": "node build/dev-server.js",
 so you can type 'npm start' instead of 'node build/dev-server.js'.
