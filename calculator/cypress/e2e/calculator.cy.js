import { navigationTest, changeThemeTest, historyTest, keypadTest, arithmeticTest } from './utils/functions.cy';

describe('General Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Navigation', () => {
    navigationTest();
  });

  it('Change theme FC', () => {
    changeThemeTest('fc');
  });

  it('Change theme FC', () => {
    changeThemeTest('cc');
  });

  it('History FC (Filling and cleaning)', () => {
    historyTest('fc');
  });

  it('History CC (Filling and cleaning)', () => {
    historyTest('cc');
  });
});

describe('Calculator Test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Keypad FC', () => {
    keypadTest('fc');
  });

  it('Arithmetic operations FC', () => {
    arithmeticTest('fc');
  });

  it('Keypad CC', () => {
    keypadTest('cc');
  });

  it('Arithmetic operations CC', () => {
    arithmeticTest('cc');
  });
});
