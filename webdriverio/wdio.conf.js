exports.config = {
    // ====================
    // Runner Configuration
    // ====================
    runner: 'local',
    // ==================
    // Specify Test Files
    // ==================
    specs: [
        '././specs/**/*spec.js'
    ],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],
    // ============
    // Capabilities
    // ============
    maxInstances: 2,
    capabilities: [{
        maxInstances: 2,
        browserName: 'chrome',
        acceptInsecureCerts: true,
        'goog:chromeOptions': {
            args:['--disable-default-apps'],
            excludeSwitches: ['enable-logging']
        }
    }],
    // ===================
    // Test Configurations
    // ===================
    logLevel: 'silent',
    bail: 0,
    baseUrl: 'http://localhost:4200/',
    waitforTimeout: 20000,
    connectionRetryTimeout: 60000,
    connectionRetryCount: 2,
    services: ['chromedriver'],
    framework: 'jasmine',
    jasmineOpts: {
        defaultTimeoutInterval: 8000,
        showColors: true
    }
}
