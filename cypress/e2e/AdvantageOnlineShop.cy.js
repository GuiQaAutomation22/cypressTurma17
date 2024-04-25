
const url = 'https://www.advantageonlineshopping.com/#/';
const btnUsuario = '#menuUserLink';
const cpUsuario ='[a-hint="Username"] > .inputContainer > .ng-pristine';
const cpSenha = '[a-hint="Password"] > .inputContainer > .ng-pristine';
const btnLogar = '#sign_in_btn';
const msgErro = '#signInResultMessage';
const usuarioIncorreto = 'ashduyasgduy';
const senhaIncorreta = 'dhfiusdhfuisd';

describe('abrindo site advantage online shopp', () => {
  beforeEach (() =>{
    cy.visit(url);
  })


   it('cenario com login e senha invalido', () => {
    cy.get(btnUsuario).click()
    cy.get(cpUsuario).type(usuarioIncorreto)
    cy.get(cpSenha).type(senhaIncorreta)
    cy.get(btnLogar).click()
    cy.wait(2000)
    cy.get(msgErro).should('be.visible')
  })

  it('cenario com login vazio e senha preenchida', () => {
    cy.get(btnUsuario).click()
    cy.get(cpSenha).type(senhaIncorreta)
    cy.get('.inputContainer > label.invalid').should('be.visible')
  })

  it('cenario com login preenchido  e senha vazio', () => {
    cy.get(btnUsuario).click()
    cy.get(cpUsuario).type(usuarioIncorreto)
    cy.get('.login > img').should('not.be.visible')
  })

  it('cenario com login e senha validos', () => {
    cy.get(btnUsuario).click()
    cy.get(cpUsuario).type('testesssdd')
    cy.get(cpSenha).type('Fc250795@')
    cy.get(btnLogar).click()
    cy.get('#menuUserLink').should('be.visible')
  })
})