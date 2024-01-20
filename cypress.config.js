const { defineConfig } = require('cypress')
require('dotenv').config()

module.exports = defineConfig({
    env:{
        ...process.env,
    },
    e2e: {
        baseUrl: 'https://qa-24.fuerza.space/',
        viewportWidth: 1024,
        viewportHeight: 768,
    },
    chromeWebSecurity: false,
})