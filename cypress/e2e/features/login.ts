import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { LoginPage } from "../pages/loginPage";

const loginPage = new LoginPage();

Given("A user opens a login page", () => {
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
});
 
When("A user enters the user {string}", () => {
  loginPage.enterUsername('Admin');
});

When("A user enters the password {string}", () => {
  loginPage.enterPassword('admin123');

});

When("A user clicks on the login button", () => {
  loginPage.clickLogin();
});

Then("A user will logged in", () => {
  cy.get('.oxd-userdropdown-tab').click();
});
