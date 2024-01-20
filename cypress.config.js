const { defineConfig } = require('cypress')
require('dotenv').config()
const url = process.env.URL

module.exports = defineConfig({
    env:{
        ...process.env
    },
    e2e: {
        baseUrl: url,
        viewportWidth: 1024,
        viewportHeight: 768,
    },
    chromeWebSecurity: false,
})