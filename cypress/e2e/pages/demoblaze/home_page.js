class homePage {
  elements = {
    productList: () => cy.get('#tbodyid'),
    phonesList: () => cy.get('#itemc:nth-child(2)'),
    laptopsList: () => cy.get('#itemc:nth-child(3)'),
    monitorsList: () => cy.get('#itemc:nth-child(4)'),
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
    const selectedProduct = cy.contains(productName);
    return selectedProduct
  }

  validateSelectedProduct(selectedProduct) {
    selectedProduct.then(($el) => {
      productPath = $el.attr('href'); // Extrae el valor del atributo href
      cy.log('El valor de href es: ' + productPath); // Muestra el valor en los logs
      cy.wrap($el).click(); // Realiza la acción de clic en el enlace
    });
  }
}

module.exports = new homePage();