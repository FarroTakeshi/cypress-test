import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import homePage from "../../pages/demoblaze/home_page";
//import {productPage} from "../../pages/demoblaze/home_page";

Given("visito el home de DemoBlaze", () => {
  cy.visit(Cypress.env('demoBlazeUrl'));
});

When("hago clic al producto producto {string}", (productName) => {
  homePage.getProductByName(productName);
  homePage.clickSelectedProduct();
});

Then("deberia ser redirigido a ver la informacion del producto", () => {
  homePage.validateUrlProduct();
});