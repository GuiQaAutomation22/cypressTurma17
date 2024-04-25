
const url = 'https://www.mercadolivre.com.br/';

describe('abrindo site Mercado Lvre', () => {
  beforeEach (() =>{
    cy.visit(url);
  })


   it('pesquisando Tenis nike', () => {
    cy.get('#cb1-edit').type('tenis nike')
    cy.get('.nav-icon-search').click()
    
  })

 
})