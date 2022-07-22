import { defineConfig } from 'cypress';
import { defaultOptions } from '@cypress/browserify-preprocessor';
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  projectId: 's8op3q',
  e2e: {
    setupNodeEvents(on, config) {
      const options = {
        ...defaultOptions,
        typescript: require.resolve('typescript'),
      };
      on('file:preprocessor', cucumber(options));
    },
    specPattern: 'cypress/e2e/**/*.{feature,features,spec.js}',
  },
});
