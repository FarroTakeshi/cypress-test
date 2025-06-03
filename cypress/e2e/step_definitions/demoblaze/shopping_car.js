import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import homePage from "../../pages/demoblaze/home_page";
//import {productPage} from "../../pages/demoblaze/home_page";

var productPath;
var baseUrl = 'https://demoblaze.com/';

Given("visito el home de DemoBlaze", () => {
  cy.visit(baseUrl);
});

When("hago clic al producto producto {string}", (productName) => {
  cy.debug(productName);
  const elementSelected = homePage.getProductByName(productName);
  productPath = elementSelected.then(($el) => {
      productPath = $el.attr('href'); // Extrae el valor del atributo href
      cy.log('El valor de href es: ' + productPath); // Muestra el valor en los logs
      cy.wrap($el).click(); // Realiza la acción de clic en el enlace
  });
  cy.debug(productPath);
  
  /*cy.contains(productName).then(($el) => {
      productPath = $el.attr('href'); // Extrae el valor del atributo href
      cy.log('El valor de href es: ' + productPath); // Muestra el valor en los logs
      cy.wrap($el).click(); // Realiza la acción de clic en el enlace
  });*/
});

Then("deberia ser redirigido a ver la informacion del producto", () => {
  cy.url().should('eq', baseUrl + productPath);
});