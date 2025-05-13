let days_before = 5;
let days_after = 10;
var new_date;
var formatted_date;
const today = new Date();

describe('Formulario Test', () => {
  describe('Test con fecha X días anteriores', () => {
    //Capturamos la nueva fecha deseada tomando en cuenta la zona horaria actual
    new_date = new Date(today);
    new_date.setDate(today.getDate() - days_before);
    new_date.setHours(0, 0, 0, 0);

    const month_before = String(new_date.getMonth() + 1).padStart(2, '0'); // Mes en formato 01-12
    const day_before = String(new_date.getDate()).padStart(2, '0');        // Día en formato 01-31
    const year_before = new_date.getFullYear();
    formatted_date = `${month_before}/${day_before}/${year_before}`;

    //Capturamos la nueva fecha deseada tomando en cuenta la zona horaria actual
    new_date = new Date(today);
    new_date.setDate(today.getDate() + days_after);
    new_date.setHours(0, 0, 0, 0);

    const month_after = String(new_date.getMonth() + 1).padStart(2, '0'); // Mes en formato 01-12
    const day_after = String(new_date.getDate()).padStart(2, '0');        // Día en formato 01-31
    const year_after = new_date.getFullYear();
    formatted_date = `${month_after}/${day_after}/${year_after}`;

    it('Llenar el formulario con fecha ' + 
        `${days_before}` 
        + ' días antes', () => {
      // Visitar la página
      cy.visit('/form');
      
      //Llenamos los campos del formulario
      cy.get('#first-name').click().type('Takeshi');
      cy.get('#last-name').click().type('Farro');
      cy.get('#job-title').click().type('Q Architect');
      cy.get('#radio-button-2').check();
      cy.get('#checkbox-1').check();
      cy.get('#select-menu')
        .should('have.value', '0');
      cy.get('#select-menu').select('3');
      cy.get('#datepicker').type(formatted_date);
  
      cy.get('.btn').click();
      cy.get('.alert.alert-success', { timeout: 1000 }).should('exist')
        .should('have.css', 'background-color', 'rgb(212, 237, 218)')
        .should('have.css', 'color', 'rgb(21, 87, 36)')
        .should('contain', 'The form was successfully submitted!')
    });
  });

  describe('Test con fecha X días posteriores', () => {
    //Capturamos la nueva fecha deseada tomando en cuenta la zona horaria actual
    new_date = new Date(today);
    new_date.setDate(today.getDate() + days_after);
    new_date.setHours(0, 0, 0, 0);

    const month = String(new_date.getMonth() + 1).padStart(2, '0'); // Mes en formato 01-12
    const day = String(new_date.getDate()).padStart(2, '0');        // Día en formato 01-31
    const year = new_date.getFullYear();
    formatted_date = `${month}/${day}/${year}`;

    it('Llenar el formulario con fecha posterior a los ' + 
        `${days_after}` 
        + ' días', () => {
      // Visitar la página
      cy.visit('/form');
      
      //Llenamos los campos del formulario
      cy.get('#first-name').click().type('Takeshi');
      cy.get('#last-name').click().type('Farro');
      cy.get('#job-title').click().type('Q Architect');
      cy.get('#radio-button-2').check();
      cy.get('#checkbox-1').check();
      cy.get('#select-menu')
        .should('have.value', '0');
      cy.get('#select-menu').select('3');
      cy.get('#datepicker').type(formatted_date);
  
      cy.get('.btn').click();
      cy.get('.alert.alert-success', { timeout: 1000 }).should('exist')
        .should('have.css', 'background-color', 'rgb(212, 237, 218)')
        .should('have.css', 'color', 'rgb(21, 87, 36)')
        .should('contain', 'The form was successfully submitted!')
    });
  });
});