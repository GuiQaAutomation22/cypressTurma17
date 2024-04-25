
const url = 'https://www.google.com/';


describe('abrindo site Google', () => {
  beforeEach (() =>{
    cy.visit(url);
  })


   it('pesquisando Iphone', () => {
    cy.get('#APjFqb').type('iphone 14 pro max')
    cy.get('.aajZCb > .lJ9FBc > center > .gNO89b').click()
    
  })

 
})