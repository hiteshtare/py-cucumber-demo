import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { LoginPage } from "../pages/loginPage";

const loginPage = new LoginPage();

Given("A web browser is at the HR login page", () => {
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
});
 
When("A user clicks on login button without any entering any credentials", () => {
  loginPage.clickLogin();
});
Then("Validation check is executed", ()=> {
  cy.get(':nth-child(2) > .oxd-input-group > .oxd-text').contains("Required");
});

When("A user enters the user {string} and password {string} and click on login button", () => {
  loginPage.enterUsername('Admin');
  loginPage.enterPassword('admin123');
  loginPage.clickLogin();
});
Then("A user will logged in", () => {
  cy.get('.oxd-userdropdown-tab').click();
});

When("A user enters the invalid user {string} and password {string} and click on login button", () => {
  loginPage.enterUsername('AdminPY');
  loginPage.enterPassword('admin123');
  loginPage.clickLogin();
});

Then("User login will fail", () => {
  cy.get('.oxd-userdropdown-tab').click();
});