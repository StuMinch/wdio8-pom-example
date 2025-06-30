export const config = {
  user: process.env.SAUCE_USERNAME || "YOUR_USERNAME",
  key: process.env.SAUCE_ACCESS_KEY || "YOUR_ACCESS_KEY",

  updateJob: false,
  reporters: ["spec"],
  specs: ["./test/specs/test-trr-logout.js"],
  exclude: [],
  services: ["sauce"],

  maxInstances: 1,

  capabilities: [
    {
      'platformName': 'ios',
      'appium:app': 'storage:filename=TRR_Staging.zip',
      'appium:deviceName': 'iPhone 15 Simulator',
      'appium:platformVersion': '17.0',
      'appium:automationName': 'XCUITest',
      'appium:autoAcceptAlerts': true,
      'appium:autoGrantPermissions': true,
      'sauce:options': {
        'appiumVersion': '2.1.3',
        'build': 'WDIO POM Example - Sauce'
      },
    },
  ],

  logLevel: "debug",
  coloredLogs: true,
  screenshotPath: "./errorShots/",
  baseUrl: "",
  waitforTimeout: 40000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  path: "/wd/hub",
  hostname: "ondemand.us-west-1.saucelabs.com",
  protocol: 'https',
  port: 443,

  framework: "mocha",
  mochaOpts: {
    ui: "bdd",
    timeout: 40000,
  },
};
