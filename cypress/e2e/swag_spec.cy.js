describe('Test Web Swag Labs', function() {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');

        cy.fixture('data/user_data')
          .then(credentials => {
            this.credentials = credentials;
        });
    });

    it('Verificar login con usuario correcto', () => {
      cy.get('input#user-name').type(this.credentials.standardUser);
      cy.get('input#password').type(this.credentials.correctPassword);
      cy.get('#login-button').click();

      cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');
      cy.location('pathname').should('eq', '/inventory.html');
      cy.location('protocol').should('contains', 'https');

      cy.title().should('eq', 'Swag Labs');
      cy.get('[data-test="title"]').should('contain.text', 'Products');
      //cy.get('.app_logo').should('eq', 'Swag Labs')
    })

    it('Verificar login con usuario incorrecto', () => {
      cy.get('input#user-name').type(this.credentials.errorUser);
      cy.get('input#password').type(this.credentials.errorPassword);
      cy.get('#login-button').click();

      cy.get('[data-test="error"]').should('contain.text', 'Epic sadface: Username and password do not match any user in this service');
    })
})