import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { hexToRgb } from "../../support/utils/functions"

Given("visito la web de SwagLabs", () => {
  cy.visit('https://www.saucedemo.com/');
});

When("introduzco las credenciales correctas", () => {
  cy.get("input#user-name").type("standard_user");
  cy.get("input#password").type("secret_sauce");
});

When("introduzco las credenciales incorrectas", () => {
  cy.get("input#user-name").type("standard_user");
  cy.get("input#password").type("bad_password");
});

When("hago clic en el botón de inicio de sesión", () => {
  cy.get("#login-button").click();
});

Then("debería ser redirigido a la página de Products", () => {
  cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');
  cy.location('pathname').should('eq', '/inventory.html');
  cy.get('[data-test="title"]').should('contain.text', 'Products');
});

Then("debería mostrarse un mensaje de error", () => {
  cy.get("h3[data-test=error]").contains("Username and password do not match any user in this service");
});

Then("debería mostrarse con un fondo de color {string}", (hexadecimal_code) => {
  cy.get(".error-message-container.error")
    .should('have.css', 'background-color', hexToRgb(hexadecimal_code))
});

Given("inicio sesión exitosamente en SwagLabs", () => {
  cy.visit('https://www.saucedemo.com/');
  
  cy.get("input#user-name").type("standard_user");
  cy.get("input#password").type("secret_sauce");
  
  cy.get("#login-button").click();
});

When("hago clic en el ícono de hamburguesa", () => {
  cy.get('#react-burger-menu-btn').click();
});

When("hago clic en el botón de cerrar sesión", () => {
  cy.get('#logout_sidebar_link').click();
});

Then("debería cerrar sesión dirigiéndome a la página de inicio", () => {
  cy.url().should('eq', 'https://www.saucedemo.com/');
  cy.get('.login_logo').should('have.text', 'Swag Labs')
});