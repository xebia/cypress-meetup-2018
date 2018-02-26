---
id: commandline
title: Using the commandline
sidebar_label: Using the commandline
---

As your test sets mature you'll probably want to run your tests in headless mode.
You can do this by issuing the command: ```npx cypress run```.
Invoke this command from the place where your cypress.json is located.

By default, this command will use the [Electron browser](https://electronjs.org/). It is packaged with Cypress and thus doesn't have to be installed. On top of that it runs headlessly.

## Running a single test from the CLI

If you want to run a single spec file use the ```--spec```-flag.

```bash
npx cypress run --spec cypress/integration/my_spec.js
```   

With knowing how to run a single spec file from the commandline,
here are some more exercises in the form of challenges, to make you even more familiar with the commandline options even better.

## Exercise 1: running tests in Headless mode
Run all your tests from the commandline in Headless mode.

## Exercise 2: Running tests from CLI in Chrome
Run all your tests from the commandline with the chrome browser

## Exercise 3: Video's
Edit one of your spec-files, so it will fail on an assert.
Now run this spec-file headless from the commandline.
You will see in the output in your terminal that the test fails.
Now you can check the video that has been made.
You can find this video at ./cypress/videos/

After watching the video, remove it.
Then edit your cypress.json so that it contains:
```
{
    "baseurl": "[your_base_url]"
    "videoRecording": false
}
```
Now re-run the failing test and check the ./cypress/videos folder and validate that the video has not been recorded.

There are many more options to configure the CLI runner, have a look at the [official Cypress documentation](https://docs.cypress.io/guides/guides/command-line.html#cypress-run).