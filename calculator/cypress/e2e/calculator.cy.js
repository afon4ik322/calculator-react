describe('General Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Navigation', () => {
    cy.get('[data-test-id=homefc]').click();
    cy.url().should('include', '/homefc');
    cy.get('[data-test-id=homefc-page]');

    cy.get('[data-test-id=homecc]').click();
    cy.url().should('include', '/homecc');
    cy.get('[data-test-id=homecc-page]');

    cy.get('[data-test-id=settingsfc]').click();
    cy.url().should('include', '/settingsfc');
    cy.get('[data-test-id=settingsfc-page]');

    cy.get('[data-test-id=settingscc]').click();
    cy.url().should('include', '/settingscc');
    cy.get('[data-test-id=settingscc-page]');
  });

  it('Change theme', () => {
    const lightBackground = 'rgb(255, 255, 255)';
    const darkBackground = 'rgb(25, 25, 26)';

    cy.get('[data-test-id=settingsfc]').click();
    cy.url().should('include', '/settingsfc');
    cy.get('#theme-select').select('Dark');
    cy.get('body').should('have.css', 'background-color', darkBackground);
    cy.get('#theme-select').select('Light');
    cy.get('body').should('have.css', 'background-color', lightBackground);

    cy.get('[data-test-id=settingscc]').click();
    cy.url().should('include', '/settingscc');
    cy.get('#theme-select').select('Dark');
    cy.get('body').should('have.css', 'background-color', darkBackground);
    cy.get('#theme-select').select('Light');
    cy.get('body').should('have.css', 'background-color', lightBackground);
  });
});
