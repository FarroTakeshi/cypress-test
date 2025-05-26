import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { hexToRgb } from "../../support/utils/functions"
import loginPage from "../pages/swaglabs/loginPage";
import inventoryPage from "../pages/swaglabs/inventoryPage";

Given("visito la web de SwagLabs", () => {
  cy.visit('https://www.saucedemo.com/');
});

When("introduzco las credenciales correctas", () => {
  loginPage.typeUsername('standard_user');
  loginPage.typePassword('secret_sauce');
});

When("introduzco las credenciales incorrectas", () => {
  loginPage.typeUsername('standard_user');
  loginPage.typePassword('bad_password');
});

When("hago clic en el botón de inicio de sesión", () => {
  loginPage.clickBotonLogin();
});

Then("debería ser redirigido a la página de Products", () => {
  cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');
  cy.location('pathname').should('eq', '/inventory.html');
  inventoryPage.elements.title_span().should('contain.text', 'Products');
});

Then("debería mostrarse un mensaje de error", () => {
  loginPage.elements.error_message().contains("Username and password do not match any user in this service");
});

Then("debería mostrarse con un fondo de color {string}", (hexadecimal_code) => {
  cy.get(".error-message-container.error")
    .should('have.css', 'background-color', hexToRgb(hexadecimal_code))
});

Given("inicio sesión exitosamente en SwagLabs", () => {
  cy.visit('https://www.saucedemo.com/');
  
  loginPage.typeUsername('standard_user');
  loginPage.typePassword('secret_sauce');
  
  loginPage.clickBotonLogin();
});

When("hago clic en el ícono de hamburguesa", () => {
  inventoryPage.clickBurgerMenu();
});

When("hago clic en el botón de cerrar sesión", () => {
  inventoryPage.clickLogoutOption();
});

Then("debería cerrar sesión dirigiéndome a la página de inicio", () => {
  cy.url().should('eq', 'https://www.saucedemo.com/');
  cy.get('.login_logo').should('have.text', 'Swag Labs')
});