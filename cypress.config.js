const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    projectId: "vqtkby",
    baseUrl: 'https://carflys-testing-v2.vercel.app/',           ///https://carflys-dev.vercel.app/
    pageLoadTimeout: 45000,
    requestTimeout: 45000,
    responseTimeout: 45000,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      
      // ok
    },
  },
});


