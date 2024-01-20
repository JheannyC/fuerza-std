
import login from "../pages/login"
import { element } from "../pages/login/elements"

Cypress.Commands.add('login', (username, password) => {
    cy.session([username, password], () => {
      cy.visit('/')
      login
      login.clickGitHubButton()
      cy.get(element.att.inputEmail).type(username)
      cy.get(element.att.inputPassword).type(password)
      login.clickSignInButton()
      //login.authorizeApp()
    })
})