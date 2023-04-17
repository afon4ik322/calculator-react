/* eslint-disable no-eval */
export const checkCalculator = [
  '2.1+(-123.78)*5/(-120)',
  '(35+8*4-213)+5/(23+2)-6',
  '(-0.5*2+5)+(14*2.8)-6',
  '(1.2+(-0.5)*2)+5.3*2',
  '7.01+(0.2*4.3/3.9)',
];

export function checkCalculatorWithEval(str) {
  const result = Math.round(eval(str) * 1000) / 1000;

  cy.get('[data-test-id=calculator-input]').type(str);
  cy.get('[data-test-id=calculator-input]').should('have.value', str);
  cy.contains('=').click();
  cy.get('[data-test-id=calculator-result]').should('have.text', result);
  cy.get('[data-test-id=history-item]').first().should('have.text', `${str} = ${result}`);
}

export function navigationTest() {
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
}

export function changeThemeTest(comp) {
  const lightBackground = 'rgb(255, 255, 255)';
  const darkBackground = 'rgb(25, 25, 26)';

  cy.get(`[data-test-id=settings${comp}`).click();
  cy.url().should('include', `/settings${comp}`);
  cy.get('#theme-select').select('Dark');
  cy.get('body').should('have.css', 'background-color', darkBackground);
  cy.get('#theme-select').select('Light');
  cy.get('body').should('have.css', 'background-color', lightBackground);
}

export function checkHomePage(comp) {
  cy.get(`[data-test-id=home${comp}]`).click();
  cy.url().should('include', `/home${comp}`);
  cy.get(`[data-test-id=home${comp}-page]`);
}

export function historyTest(comp) {
  checkHomePage(comp);

  [(checkCalculator[0], checkCalculator[1])].forEach((str) => checkCalculatorWithEval(str));

  cy.get(`[data-test-id=settings${comp}]`).click();
  cy.url().should('include', `/settings${comp}`);
  cy.get(`[data-test-id=settings${comp}-page]`);
  cy.contains('Clear All History').click();

  cy.get(`[data-test-id=home${comp}]`).click();
  cy.url().should('include', `/home${comp}`);
  cy.get(`[data-test-id=home${comp}-page]`);
  cy.get('[data-test-id=history-list]').should('have.text', 'History is empty');
}

export function keypadTest(comp) {
  cy.get(`[data-test-id=home${comp}]`).click();
  cy.url().should('include', `/home${comp}`);
  cy.get(`[data-test-id=home${comp}-page]`);

  // 'NUMBERS AND OPERATATORS'
  cy.get('[data-test-id=calculator-button]').each((btn) => {
    if (btn.text() !== '=' && btn.text() !== 'C' && btn.text() !== 'CE') {
      cy.wrap(btn).click();
    }
  });
  cy.get('[data-test-id=calculator-input]').should('have.value', '789-456+123.(0)%');

  //'CLEAR 1 CHARACTER'
  cy.get('[data-test-id=calculator-button]').each((btn) => {
    if (btn.text() === 'CE') {
      cy.wrap(btn).click();
    }
  });
  cy.get('[data-test-id=calculator-input]').should('have.value', '789-456+123.(0)');

  //'CLEAR ALL INPUT'
  cy.get('[data-test-id=calculator-button]').each((btn) => {
    if (btn.text() === 'C') {
      cy.wrap(btn).click();
    }
  });
  cy.get('[data-test-id=calculator-input]').should('have.value', '');

  //'±'
  cy.get('[data-test-id=calculator-button]').each((btn) => {
    if (btn.text() === '7') {
      cy.wrap(btn).click().click();
    }
  });
  cy.get('[data-test-id=calculator-input]').should('have.value', '77');
  cy.get('[data-test-id=calculator-button]').each((btn) => {
    if (btn.text() === '±') {
      cy.wrap(btn).click();
    }
  });
  cy.get('[data-test-id=calculator-input]').should('have.value', '(-77)');

  cy.get('[data-test-id=calculator-button]').each((btn) => {
    if (btn.text() === '±') {
      cy.wrap(btn).click();
    }
  });
  cy.get('[data-test-id=calculator-input]').should('have.value', '77');
}

export function arithmeticTest(comp) {
  checkHomePage(comp);
  checkCalculator.forEach((str) => checkCalculatorWithEval(str));
}
