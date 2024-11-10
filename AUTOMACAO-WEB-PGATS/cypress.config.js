
import someModule from './some-module.js'
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const file = 'your-file-path';
const loadedFile = require(file);
const { defineConfig } = require('cypress');
const fileURL = new URL('./path/to/module.js', import.meta.url);

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    baseUrl: 'https://automationexercise.com'
    setupNodeEvents(on, config) {
      // implement node event listeners here
    require('cypress-mochawesome-reporter/plugin')(on);

    },
  },
});

