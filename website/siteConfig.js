/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const siteConfig = {
  title: 'Cypress.io & Javascript basics' /* title for your website */,
  tagline: 'Test Masters Series',
  url: 'https://xebia.github.io/' /* your website url */,
  baseUrl: '/cypress-meetup-2018/' /* base url for your project */,
  projectName: 'cypress-meetup-2018',
  headerLinks: [
    {doc: 'introduction', label: 'Home'},
  ],
  /* path to images for header/footer */
  headerIcon: 'img/cy.png',
  footerIcon: 'img/cy.png',
  favicon: 'img/favicon.ico',
  /* colors for website */
  colors: {
    primaryColor: '#80446F',
    secondaryColor: '#51B2AC',
  },
  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright:
    'Copyright © ' +
    new Date().getFullYear() +
    'Xebia Test Masters Series',
  // organizationName: 'deltice', // or set an env variable ORGANIZATION_NAME
  // projectName: 'test-site', // or set an env variable PROJECT_NAME
  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'default',
  },
  scripts: ['https://buttons.github.io/buttons.js'],
  // You may provide arbitrary config keys to be used as needed by your template.
  repoUrl: 'https://github.com/xebia/cypress-meetup-2018/',
};

module.exports = siteConfig;
