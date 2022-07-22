export class GooglePage {
  navigateToHome() {
    cy.visit('https://google.com');
  }

  foo() {
    expect(true).to.equal(true);
  }

  search(searchQuery) {
    cy.get('input[type="text"]').type(`${searchQuery}{enter}`);
  }

  validateSearchResultCount() {
    cy.get('div[id="rso"]').children().its('length').should('be.gte', 1);
  }

  validateSearchResultContains(resultsFrom) {
    cy.get('div[id="rso"]').contains(resultsFrom);
  }
}
