const { defineConfig } = require("cypress");

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

      // return any mods to Cypress
      return config
    },
    baseUrl: 'https://formy-project.herokuapp.com',
    //supportFile: "cypress/support/e2e.js"
  }
});
