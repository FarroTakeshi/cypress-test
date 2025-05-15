const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'z31xik',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://formy-project.herokuapp.com',
    //supportFile: "cypress/support/e2e.js"
  },
});
