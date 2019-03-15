exports.config = {
  hostname: "localhost",
  port: 4444,
  path: "/wd/hub",
  specs: ["./tests/registration.ts"],
  sync: true,
  services: ["selenium-standalone"],
  capabilities: [
    {
      browserName: "chrome"
    }
  ],
  baseUrl: "https://lalafo.az",
  framework: "mocha",
  mochaOpts: {
    ui: "bdd",
    timeout: 120000,
    // retries: 2
    //fgrep: "C1232"
  },
  reporters: ["spec"],
  before: function(capabilities, specs) {
    process.env.TS_NODE_FILES = true;
    require("ts-node").register();
  }
};
