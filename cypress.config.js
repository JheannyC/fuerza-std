const { defineConfig } = require('cypress')
require('dotenv').config()

module.exports = defineConfig({
    env:{
        ...process.env,
    },
    e2e: {
        baseUrl: `${Cypress.env('URL')}`,
        viewportWidth: 1024,
        viewportHeight: 768,
    },
    chromeWebSecurity: false,
})