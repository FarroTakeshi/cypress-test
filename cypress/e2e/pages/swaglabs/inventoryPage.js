class inventoryPage {

  elements = {
    title_span: () => cy.get('[data-test="title"]'),
    burger_menu: () => cy.get('#react-burger-menu-btn'),
    logout_option: () => cy.get('#logout_sidebar_link')
  }

  clickBurgerMenu() {
    this.elements.burger_menu().click()
  }

  clickLogoutOption() {
    this.elements.logout_option().click()
  }
}

module.exports = new inventoryPage();