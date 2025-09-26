const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'dogarz',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
