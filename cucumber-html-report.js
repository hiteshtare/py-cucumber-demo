const report = require("multiple-cucumber-html-reporter");
report.generate({
  jsonDir: "json", // ** Path of .json file **//
  reportPath: "reports"
});