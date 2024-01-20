import { element } from './elements'

class Login {
    
    visitForm(){
        cy.visit('/')
    }
    clickGitHubButton(){
        cy.get(element.att.signInWithGitHub).click()
    }
    clickSignInButton(){
        cy.get(element.att.buttonSignIn).contains('Sign in').click()
    }
    authorizeApp(){
        cy.get(element.att.authorize).click()
    }
}

export default new Login()