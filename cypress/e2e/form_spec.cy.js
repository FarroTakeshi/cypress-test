let days_before = 5;
let days_after = 10;
var new_date;
const today = new Date();

//Capturamos la nueva fecha deseada tomando en cuenta la zona horaria actual
new_date = new Date(today);
new_date.setDate(today.getDate() + days_after);
new_date.setHours(0, 0, 0, 0);

const month = String(new_date.getMonth() + 1).padStart(2, '0'); // Mes en formato 01-12
const day = String(new_date.getDate()).padStart(2, '0');        // Día en formato 01-31
const year = new_date.getFullYear();
const formattedDate = `${month}/${day}/${year}`;

describe('Formulario Test', () => {
  it('Llenar el formulario básico', () => {
    // Visitar la página
    cy.visit('https://formy-project.herokuapp.com/form');
    
    //Llenamos los campos del formulario
    cy.get('#first-name').click().type('Takeshi');
    cy.get('#last-name').click().type('Farro');
    cy.get('#job-title').click().type('Q Architect');
    cy.get('#radio-button-2').check();
    cy.get('#checkbox-1').check();
    cy.get('#select-menu')
      .should('have.value', '0');
    cy.get('#select-menu').select('3');
    cy.get('#datepicker').type(formattedDate);

    cy.get('.btn').click();

  });
});