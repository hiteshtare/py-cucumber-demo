const report = require("multiple-cucumber-html-reporter");
report.generate({
  jsonDir: "cucumber-json", // ** Path of .json file **//
  reportPath: "cucumber-report"
});