describe('API Error Handling', () => {
  it('should display an error message when the API call fails', () => {
    cy.intercept('GET', 'https://www.theaudiodb.com/api/v1/json/2/album.php?i=112035', {
      forceNetworkError: true,
    }).as('fetchError')

    cy.visit('/')
    cy.wait('@fetchError')
    cy.get('.error').should('be.visible').and('contain', 'Error fetching album data.')
  })
})
