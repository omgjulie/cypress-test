/* tslint:disable */
import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://jsonplaceholder.typicode.com/",
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    pageLoadTimeout: 30000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
