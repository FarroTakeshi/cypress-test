class homePage {
  
  constructor() {
    this.selectedProduct = null; // Inicializamos selectedProduct como null
    this.productPath = null;
  }

  elements = {
    productList: () => cy.get('#tbodyid'),
    phonesList: () => cy.get('#itemc:nth-child(2)'),
    laptopsList: () => cy.get('#itemc:nth-child(3)'),
    monitorsList: () => cy.get('#itemc:nth-child(4)')
  }

  clickPhonesOption() {
    this.elements.phonesList().click();
  }

  clickLaptopsOption() {
    this.elements.laptopsList().click();
  }

  clickMonitorsOption() {
    this.elements.monitorsList().click();
  }

  getProductByName(productName) {
    this.selectedProduct = cy.contains(productName);
  }

  clickSelectedProduct() {
    this.selectedProduct.then(($el) => {
      this.productPath = $el.attr('href'); // Extrae el valor del atributo href
      cy.log('El valor de href es: ' + this.productPath); // Muestra el valor en los logs
      cy.wrap($el).click(); // Realiza la acción de clic en el enlace
    });
  }

  validateUrlProduct() {
    cy.url().should('eq', Cypress.env('demoBlazeUrl') + this.productPath);
  }
}

module.exports = new homePage();