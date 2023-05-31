import BasePage from "../pageObjects/base.page";

class LoginPage {
  static setUsername(username) {
    cy.get('#txt-username').type(username);
  }

  static setPassword(password) {
    cy.get('#txt-password').type(password);
  }

  static clickLogin() {
    cy.get('#btn-login').click();
  }
}

export default LoginPage;