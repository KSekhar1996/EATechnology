import { defineConfig } from "cypress";

export default defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
          // implement node event listeners here
        }, 
        baseUrl: 'http://localhost:4200/festivals',
        testIsolation: false, //To overcome blank page
        env: {
          apiUrl: 'https://eacp.energyaustralia.com.au/codingtest/api/v1/festivals',   
        }
    },
});