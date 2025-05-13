let days_before = -5;
let days_after = 10;
var new_date;
var formatted_date_before;
var formatted_date_after;
const today = new Date();

//función para recalcular fecha
function recalculateDate(current_date, days) {
  var formatted_date;
  //Capturamos la nueva fecha deseada tomando en cuenta la zona horaria actual
  new_date = new Date(current_date);
  new_date.setDate(today.getDate() + days);
  new_date.setHours(0, 0, 0, 0);
  console.log('new date is ' + `${new_date}`)

  const month = String(new_date.getMonth() + 1).padStart(2, '0'); // Mes en formato 01-12
  const day = String(new_date.getDate()).padStart(2, '0');        // Día en formato 01-31
  const year = new_date.getFullYear();
  return formatted_date = `${month}/${day}/${year}`;
};

describe('Formulario Test', () => {
  describe('Test con fecha X días anteriores', () => {
    formatted_date_before = recalculateDate(today, days_before);

    it('Llenar el formulario con fecha ' + 
        `${Math.abs(days_before)}`
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
      cy.get('#datepicker').type(formatted_date_before);
  
      cy.get('.btn').click();
      cy.get('.alert.alert-success', { timeout: 1000 }).should('exist')
        .should('have.css', 'background-color', 'rgb(212, 237, 218)')
        .should('have.css', 'color', 'rgb(21, 87, 36)')
        .should('contain', 'The form was successfully submitted!')
    });
  });

  describe('Test con fecha X días posteriores', () => {
    formatted_date_after = recalculateDate(today, days_after);

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
      cy.get('#datepicker').type(formatted_date_after);
  
      cy.get('.btn').click();
      cy.get('.alert.alert-success', { timeout: 1000 }).should('exist')
        .should('have.css', 'background-color', 'rgb(212, 237, 218)')
        .should('have.css', 'color', 'rgb(21, 87, 36)')
        .should('contain', 'The form was successfully submitted!')
    });
  });
});