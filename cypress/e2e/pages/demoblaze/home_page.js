class DemoBlazeHome {
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
}