class loginPage {

  elements = {
    username_input: () => cy.get('#user-name'),
    password_input: () => cy.get('#password'),
    login_button: () => cy.get('#login-button'),
    error_message: () => cy.get('h3[data-test=error]')
  }

  typeUsername(username) {
    this.elements.username_input().type(username);
  }

  typePassword(password) {
    this.elements.password_input().type(password);
  }

  clickBotonLogin() {
    this.elements.login_button().click()
  }
}

module.exports = new loginPage();