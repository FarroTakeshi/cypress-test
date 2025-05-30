const { defineConfig } = require("cypress");
const { allureCypress } = require("allure-cypress/reporter");
const { Status } = require("allure-js-commons");
const os = require("node:os");

module.exports = defineConfig({
  projectId: 'z31xik',
  e2e: {
    specPattern: '**/*.{cy.js,feature}',
    env: {
      filterSpecs: true,
      filterSpecsMixedMode : 'hide'
    },
    async setupNodeEvents(on, config) {
      const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin
      const createBundler = require('@bahmutov/cypress-esbuild-preprocessor')

      // await here
      await require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin(on, config)

      on('file:preprocessor',   createBundler({
        plugins: [createEsbuildPlugin(config)],
      }));

      allureCypress(on, config, {
        resultsDir: "allure-results",
        links: {
          issue: {
            nameTemplate: "Issue #%s",
            urlTemplate: "https://issues.example.com/%s",
          },
          tms: {
            nameTemplate: "TMS #%s",
            urlTemplate: "https://tms.example.com/%s",
          },
          jira: {
            urlTemplate: (v) => `https://jira.example.com/browse/${v}`,
          },
        },
        categories: [
          {
            name: "foo",
            messageRegex: "bar",
            traceRegex: "baz",
            matchedStatuses: [Status.FAILED, Status.BROKEN],
          },
        ],
        environmentInfo: {
          os_platform: os.platform(),
          os_release: os.release(),
          os_version: os.version(),
          node_version: process.version,
        },
      });

      // return any mods to Cypress
      return config
    },
    baseUrl: 'https://formy-project.herokuapp.com',
    //video: true,
    //supportFile: "cypress/support/e2e.js"
  }
});
