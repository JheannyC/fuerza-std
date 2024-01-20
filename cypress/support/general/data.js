export const fill = {
    login: {
        email: `${Cypress.env('GIT_EMAIL')}`,
        password: `${Cypress.env('GIT_PASSWORD')}`,
    },
    post:{
        title: 'this is a automated post',
        body: 'this is a body automated',
    }
}