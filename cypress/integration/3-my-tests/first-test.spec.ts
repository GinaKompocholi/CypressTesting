/// <reference types="cypress" />


// describe vs context??
describe('Actions', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/?fbclid=IwAR0B-K9BTs5ntuDVgxY6z1RRauR0LK5BVWbMi-82y5HnaxbADZbiN-MB0HU')
  })

  it('Contains headlines', () => {
    cy.contains('Welcome to the-internet Available Examples')
    cy.get('h1').should('exist')
    cy.get('h2').should('exist')
  })

  // ti kanei to focus??
  it('Focus on headline', () => {
    cy.get('h1').focus()
    .should('have.class', 'focus')

  })

  const checkChapter = (chapter, partiaLink, id) =>{
    cy.get(`:nth-child(${chapter}) > a`).click()
    cy.url().should('contain', `/${partiaLink}`)
    cy.get('h3').should('exist')
    cy.get(`[id=${id}]`).should('exist')


  }
  it('Redirect link url works well', () => {
    checkChapter(36, 'redirector', 'redirect')
    cy.go('back')

  })

  it.only('Dropdown test', () => {
    checkChapter(11, 'dropdown', 'dropdown')
    cy.contains('Dropdown List')

    //cy.get('select[id="dropdown').should('contain', 'Option 1')

    cy.get('#dropdown [disabled]').contains('Please select an option')


    // pws elegxw oti to default einai value disabled="enabled"
    
    cy.get('[id="dropdown"]').should('exist').select('Option 1')
    cy.get('[id="dropdown"]').should('have.value', '1')
    cy.get('[id="dropdown"]').should('not.be.disabled')

  })

  it('Checkboxes test', () => {
    cy.get(':nth-child(6) > a').click()
    cy.url().should('contain', '/checkboxes')
    cy.get('#page-footer').should('exist')
    cy.get('h3').should('exist')
    cy.contains('Checkboxes')

    cy.get('#checkboxes').should('contain', 'checkbox')

    // checkboxes are not disabled
    cy.get('#checkboxes > :nth-child(1)').not('[disabled]')
    cy.get('#checkboxes > :nth-child(3)').not('[disabled]')


    cy.get('#checkboxes > :nth-child(3)').should('be.checked')


    cy.get('#checkboxes > :nth-child(1)').check().should('be.checked')
    cy.get('#checkboxes > :nth-child(3)').uncheck().should('not.be.checked')
    cy.get('#checkboxes > :nth-child(1)').uncheck().should('not.be.checked')
    
    cy.get('#checkboxes [type="checkbox"]').should('not.be.checked')
    cy.get('#checkboxes [type="checkbox"]').check() 
    cy.get('#checkboxes [type="checkbox"]').should('be.checked')
    //how can i find their names?? e.g. => .check(['checkbox 1', 'checkbox 2'])

  })



})