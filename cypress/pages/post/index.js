import { fill } from "../../cypress/support/general/data"
import { element } from "./elements"

class Post {
    fillTitle(){
        cy.get(element.att.title).type(fill.post.title)
    }
    fillBody(){
        cy.get(element.att.body).type(fill.post.body)
    }
    clickPublish(){
        cy.get(element.att.publish).click()
    }
    confirmNewPost(){
        cy.get(element.att.confirmTitle).should('contain', fill.post.title)
    }
    deletePost(){
        cy.get(element.att.delete).click()
    }
    confirmDeletePost(){
        cy.contains('button', 'Delete post').should('be.visible').click()

    }
}

export default new Post()