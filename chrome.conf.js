export const config = {
    user: process.env.LT_USERNAME || "YOUR_USERNAME",
    key: process.env.LT_ACCESS_KEY || "YOUR_ACCESS_KEY",
  
    updateJob: true,
    reporters: ["spec"],
    specs: ["./test/specs/test.browser.error.js"],
    exclude: [],
    services: ["lambdatest", "devtools"],
  
    maxInstances: 10,
  
    capabilities: [{
        browserName: 'Chrome',
        browserVersion: 'latest',
        'LT:Options': {
          platformName: 'Windows 10',
          seCdp: true,
          websocketUrl: true,
          selenium_version: "4.0.0",
          user: process.env.LT_USERNAME,
          accessKey: process.env.LT_ACCESS_KEY,
          build: 'Validate Page Title',
          console: true,
        }
      }],      
        
  
    logLevel: "debug",
    coloredLogs: true,
    screenshotPath: "./errorShots/",
    baseUrl: "",
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    path: "/wd/hub",
    product: "appAutomation",
    hostname: process.env.LT_GRID_URL||"hub.lambdatest.com",
    port: 80,
  
    framework: "mocha",
    mochaOpts: {
      ui: "bdd",
      timeout: 20000,
    },
};
