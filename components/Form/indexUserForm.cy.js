import React from 'react'
import UserForm from './index'

describe('<UserForm />', () => {
  beforeEach(() => {
    cy.mount(<UserForm />)
  })

  it('Submits the form', () => {
    let submitted
    cy.get('#form').invoke('submit', (e) => {
      // do not actually submit the form
      e.preventDefault()
      submitted = true
    })

    cy.get('#form').within(() => {
      cy.get('#name').type("name")
      cy.get('#surname').type("surname")
      cy.get('#topic').select("Cars")
      cy.get('#submit').click()
    })
      .then(() => {
        expect(submitted, 'form submitted').to.be.true
      })
  })

  it('Submits the form with other topic', () => {
    let submitted
    cy.get('#form').invoke('submit', (e) => {
      // do not actually submit the form
      e.preventDefault()
      submitted = true
    })

    cy.get('#form').within(() => {
      cy.get('#name').type("name")
      cy.get('#surname').type("surname")
      cy.get('#topic').select("Other")
      cy.get('#otherTopic').type("Other")
      cy.get('#submit').click()
    })
      .then(() => {
        expect(submitted, 'form submitted').to.be.true
      })
  })

  it('Validates name', () => {
    cy.get('#form').within(() => {
      cy.get('#name').invoke('prop', 'validity')
        .should('deep.include', {
          valid: false
        })
    })
  })

  it('Validates surname', () => {
    cy.get('#form').within(() => {
      cy.get('#surname').invoke('prop', 'validity')
        .should('deep.include', {
          valid: false
        })
    })
  })

  it('Validates topic', () => {
    cy.get('#form').within(() => {
      cy.get('#topic').invoke('prop', 'validity')
        .should('deep.include', {
          valid: false
        })
    })
  })

  it('Validates other topic', () => {
    cy.get('#form').within(() => {
      cy.get('#topic').select("Other")
      cy.get('#otherTopic').invoke('prop', 'validity')
        .should('deep.include', {
          valid: false
        })
    })
  })
})

