class productPage {
  elements = {
    productImage: () => cy.get('.item img'),
    productName: () => cy.get('h2.name'),
    productPrice: () => cy.get('h3.price-container'),
    productDescription: () => cy.get('#more-information > p')
  }
}

module.exports = new productPage();