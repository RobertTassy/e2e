/*
 * 📝 Cypress API Docs: https://docs.cypress.io/api/table-of-contents
## What we are testing
The frontend renders data from the following endpoint:
[https://api.tvmaze.com/search/shows?q=batman](https://api.tvmaze.com/search/shows?q=batman) We'll be writing tests for the following API and UI's.

- `/`
- `/about`
- `/p/:movieId`

### API Tests
* Check that endpoint `/` returns data
* Check that `/` returns 10 data records
* Check that first records show name from `/` is "Batman"
  
### UI Tests
  * Chek that there's an `<h1>` element with the text 'Batman TV Shows'
  * Clicking that the 'About' link navigates you to the about page
  * Check that the about page contains the copy: 'This is the about page'
  * Check there is * There is a `<ul>` with 10 `<li>`s on the `home` page
  * Check that each of the  `<li>`s have `<a>` children with href attributes and clicking on `<li>` navigates you to the individual movie page. 
  * Check that the movie page contains a movie description and image
  * Check that the URL matches the child link href that you clicked o
*/

// Optional: Uncomment the next line to enable Cypress code completion:
// <reference types="Cypress" />

describe("Batman TV Show App", () => {
    it("API Tests", () => {
      cy.request("https://api.tvmaze.com/search/shows?q=batman").then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.length(10)
        expect(response.body[0].show.name).contains('The Batman')
      })

      // cy.log("You can cy log");
      // console.log("You can also console.log");
    });

    it("UI Tests", () => {
      cy.visit("/")
      cy.get('h1').should('contain', 'Batman TV Shows' )
      cy.get('[href="/about"]').click()
      cy.url().should('include', '/about')
      cy.get('p').should('contain', 'This is the about page')
      cy.visit("/").should('contain', 'ul')
    })
});
