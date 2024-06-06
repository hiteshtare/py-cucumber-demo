export class LoginPage {
  // login() {
  //   this.enterUsername();
  //   this.enterPassword();
  //   this.clickLogin();
  // }

  textboxUsername = 'input[name="username"]';
  textboxPassword = 'input[name="password"]';
  buttonLogin = ".oxd-button";
  
  enterUsername(username: string) {
    cy.get(this.textboxUsername).type(username);
  }

  enterPassword(password: string) {
    cy.get(this.textboxPassword).type(password);
  }

  clickLogin() {
    cy.get(this.buttonLogin).click();
  }
}
