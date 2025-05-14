describe('Prueba Todo', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/todo')
    cy.get('.new-todo')
      .type('Tarea1{enter}')
      .type('Tarea2{enter}')
      .type('Tarea3{enter}');
  })

  it('Deberia tener la cantidad de elementos en el listado', () => {
    cy.get('div > section >ul.todo-list li')
      .should('have.length', 3);
  });

  it('Deberian haberse agregado elementos al listado', () => {
    cy.get('ul.todo-list > li')
      .should('have.length', 3)
      .and($li => {
        expect($li.get(0).innerText).to.equal('Tarea1')
        expect($li.get(1).innerText).to.equal('Tarea2')
        expect($li.get(2).innerText).to.equal('Tarea3')
      });
  });
});