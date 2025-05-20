const {recalculateDate,csvToJson} = require("./../support/utils/functions");

let days_before = -5;
let days_after = 10;
var formatted_date_before;
var formatted_date_after;
const today = new Date();

describe('Formulario Test', () => {
  
  before(() => {
    formatted_date_before = recalculateDate(today, days_before);
    formatted_date_after = recalculateDate(today, days_after);
  });

  beforeEach(() => {
    cy.visit('/form');
  });
  
  it('Llenar el formulario con fecha ' + `${Math.abs(days_before)}` + ' días antes', () => {

    //Llenamos los campos del formulario
    cy.get('#first-name').click().type('Takeshi');
    cy.get('#last-name').click().type('Farro');
    cy.get('#job-title').click().type('Q Architect');
    cy.get('#radio-button-2').check();
    cy.get('#checkbox-1').check();
    cy.get('#select-menu')
      .should('have.value', '0');
    cy.get('#select-menu').select('3');
    cy.get('#datepicker').type(formatted_date_before);

    cy.get('.btn').click();
    cy.get('.alert.alert-success', { timeout: 1000 }).should('exist')
      .should('have.css', 'background-color', 'rgb(212, 237, 218)')
      .should('have.css', 'color', 'rgb(21, 87, 36)')
      .should('contain', 'The form was successfully submitted!')
  });

  it('Llenar el formulario con fecha posterior a los ' + `${days_after}` + ' días', () => {
      
    //Llenamos los campos del formulario
    cy.get('#first-name').click().type('Takeshi');
    cy.get('#last-name').click().type('Farro');
    cy.get('#job-title').click().type('Q Architect');
    cy.get('#radio-button-2').check();
    cy.get('#checkbox-1').check();
    cy.get('#select-menu')
      .should('have.value', '0');
    cy.get('#select-menu').select('3');
    cy.get('#datepicker').type(formatted_date_after);
  
    cy.get('.btn').click();
    cy.get('.alert.alert-success', { timeout: 1000 }).should('exist')
      .should('have.css', 'background-color', 'rgb(212, 237, 218)')
      .should('have.css', 'color', 'rgb(21, 87, 36)')
      .should('contain', 'The form was successfully submitted!')
  });

  it.only('Deberia llenar el formulario con los datos del csv', () => {
    // Carga los datos del CSV
    cy.readFile('cypress/fixtures/data/personas.csv').then((data) => {
      //console.log(data)
      const json_data = csvToJson(data);
      json_data.forEach((user_data) => {
        cy.visit('/form');
        cy.get('#first-name').click().type(user_data.firstname);
        cy.get('#last-name').click().type(user_data.lastname);
        cy.get('#job-title').click().type(user_data.job);
        //buscamos el elemento que contenga el texto y usamos un selector para filtrarlo
        cy.contains(user_data.education)
          .find('input[type=radio]')
          .check();
        //lo mismo para el género
        cy.contains(user_data.sex)
          .find('input[type=checkbox]')
          .check();
        cy.get('#select-menu')
          .select(`${user_data.experience.trim()}`);
        /*cy.get('#select-menu')
          .select('1-20');*/
        //cy.get('#select-menu').select('3');
        cy.get('#datepicker').type(formatted_date_before);
      
        cy.get('.btn').click();
        cy.get('.alert.alert-success', { timeout: 1000 }).should('exist')
          .should('have.css', 'background-color', 'rgb(212, 237, 218)')
          .should('have.css', 'color', 'rgb(21, 87, 36)')
          .should('contain', 'The form was successfully submitted!')
      });
    })
  });
});