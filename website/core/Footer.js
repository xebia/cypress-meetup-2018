/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? language + '/' : '') + doc;
  }

  render() {
    const currentYear = new Date().getFullYear();
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>Meetup group</h5>
            <a href="https://www.meetup.com/Test-Masters-Series/" target="_blank">
                Test Masters Series
            </a>
              <a href="https://xebia.com/test-automation-quality" target="_blank">
                Xebia
              </a>
          </div>
          <div>
            <h5>Community</h5>
            <a
              href="https://stackoverflow.com/questions/tagged/cypress"
              target="_blank">
              Stack Overflow
            </a>
            <a href="https://gitter.im/cypress-io/cypress" target="_blank">Gitter</a>
            <a href="https://twitter.com/Cypress_io" target="_blank">
              Twitter
            </a>
          </div>
          <div>
            <h5>More</h5>
              <a
                  href="https://cypress.io"
                  target="_blank">
                  Cypress.io website
              </a>
            <a href="https://github.com/cypress-io/cypress">GitHub</a>
            <a
              className="github-button"
              href={this.props.config.repoUrl}
              data-icon="octicon-star"
              data-count-href="/cypress-io/cypress/stargazers"
              data-show-count={true}
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub">
              Star
            </a>
          </div>
        </section>

        <a
          href="https://www.xebia.com"
          target="_blank"
          className="fbOpenSource">
          <img
            src={this.props.config.baseUrl + 'img/xebia-logo-bw.png'}
            alt="Xebia logo"
            width="170"
            height="45"
          />
        </a>
        <section className="copyright">
          Software Quality & Test Automation
        </section>
      </footer>
    );
  }
}

module.exports = Footer;
