
describe('Exercício para Automação Web', () => {
  before(() => {
    cy.visit('https://wj-qa-automation-test.github.io/qa-test/')
  })

  beforeEach(() => {
    cy.reload()
  })


  it('clicando botões one, two e four', () => {
    cy.get('#btn_one').click()
      .should('not.have.value', 'One')
    cy.get('#btn_two').click()
      .should('not.have.value', 'Two')
    cy.get('#btn_link').click()
    .should('not.have.value', 'Four')
  })


  it('clicando botões one, two e four no painel FRAME BUTTONS', () => {
    cy.visit('https://wj-qa-automation-test.github.io/qa-test/')       
    cy.get('#btn_one').click()
      .should('not.have.value', 'One')
    cy.get('#btn_two').click()
      .should('not.have.value', 'Two')
    cy.get('#btn_link').click()
    .should('not.have.value', 'Four')
  })


  it('preenchendo campo YourFirstName, clicando botão One, cheque opção OptionThree, selecionando opção ExampleTwo dentro da select box, validando imagem do logo SeleniumWebDriver', () => {
    cy.get('#first_name')
      .type('Cypress Test')    
      .should('have.value','Cypress Test' )
    cy.get('#btn_one').click()
      .should('not.have.value', 'One')
    cy.get('#opt_one')
      .should('not.be.checked')
    cy.get('#select_box')
      .select('option_two')
      .should('have.value', 'option_two')
    cy.get('[alt="selenium"]')
      .should('be.visible')
  })

})