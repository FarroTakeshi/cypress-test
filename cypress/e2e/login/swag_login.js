import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("visito la web de SwagLabs", () => {
  cy.visit('https://www.saucedemo.com/');
});

When("introduzco las credenciales correctas", () => {
  cy.get("input#user-name").type("standard_user");
  cy.get("input#password").type("secret_sauce");
});

When("hago clic en el botón de inicio de sesión", () => {
  cy.get("#login-button").click();
});

Then("debería ser redirigido a la página de Products", () => {
  cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');
  cy.location('pathname').should('eq', '/inventory.html');
  cy.get('[data-test="title"]').should('contain.text', 'Products');
});