/// <reference types="cypress" />

describe('example to-do app', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/')

      cy
      .intercept('/api/unsplash/*')
      .as('image')
    })
  
    it('Submits form with standard topic', () => {
      cy.get('#name').click().type('Name')
      cy.get('#name').should('have.value', 'Name')

      cy.get('#surname').click().type('Surname')
      cy.get('#surname').should('have.value', 'Surname')

      cy.get('#topic').select('Travel')
      cy.get('#topic').should('have.value', 'Travel')

      cy.get('#submit').click()

      cy
      .wait('@image')
      .then(intercept => {
        const response = intercept.response
        expect(response).to.have.property('statusCode', 200)
      });

      cy.get('img').should('be.visible')
    })

    it('Submits form with other topic', () => {
      cy.get('#name').click().type('Name')
      cy.get('#name').should('have.value', 'Name')

      cy.get('#surname').click().type('Surname')
      cy.get('#surname').should('have.value', 'Surname')

      cy.get('#topic').select('Other')
      cy.get('#topic').should('have.value', 'Other')

      cy.get('#otherTopic').click().type('Random')
      cy.get('#otherTopic').should('have.value', 'Random')

      cy.get('#submit').click()

      cy
      .wait('@image')
      .then(intercept => {
        const response = intercept.response
        expect(response).to.have.property('statusCode', 200)
      });

      cy.get('img').should('be.visible')
    })

    it('Rejects Image', () => {
      cy.get('#name').click().type('Name')
      cy.get('#name').should('have.value', 'Name')

      cy.get('#surname').click().type('Surname')
      cy.get('#surname').should('have.value', 'Surname')

      cy.get('#topic').select('Travel')
      cy.get('#topic').should('have.value', 'Travel')

      cy.get('#submit').click()

      cy
      .wait('@image')
      .then(intercept => {
        const response = intercept.response
        expect(response).to.have.property('statusCode', 200)
      });

      cy.get('#refuseButton').click()

      cy
      .wait('@image')
      .then(intercept => {
        const response = intercept.response
        expect(response).to.have.property('statusCode', 200)
      });

      cy.get('img').should('be.visible')
    })

    it('Opens Modal', () => {
      cy.get('#name').click().type('Name')
      cy.get('#name').should('have.value', 'Name')

      cy.get('#surname').click().type('Surname')
      cy.get('#surname').should('have.value', 'Surname')

      cy.get('#topic').select('Travel')
      cy.get('#topic').should('have.value', 'Travel')

      cy.get('#submit').click()

      cy
      .wait('@image')
      .then(intercept => {
        const response = intercept.response
        expect(response).to.have.property('statusCode', 200)
      });

      cy.get('#acceptButton').click()
      
      cy.get('#modalName').should('have.value', 'Name')
      cy.get('#modalSurname').should('have.value', 'Surname')
      cy.get('#modalImage > img').should('be.visible')
    })
})