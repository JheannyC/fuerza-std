import login from "../pages/login"
import post from "../pages/post"
import { fill } from "../support/general/data"

describe('Create and delete post', () => {

  beforeEach(() => {
    cy.intercept('GET', '**/post/**').as('newPost')
    cy.login(fill.login.email, fill.login.password)
  })

  it('should create and, in sequence, delete the post', () => {
    cy.visit('/new')
    login.clickGitHubButton()
    post.fillTitle()
    post.fillBody()
    post.clickPublish()
    cy.wait('@newPost')
    post.confirmNewPost()
    post.deletePost()
    post.confirmDeletePost()
  })

})