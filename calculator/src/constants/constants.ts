export enum LinkAddress {
  homefc = 'homefc',
  homecc = 'homecc',
  settingsfc = 'settingsfc',
  settingscc = 'settingscc',
}

export enum LinkName {
  homefc = 'Home FC',
  homecc = 'Home CC',
  settingsfc = 'Settings FC',
  settingscc = 'Settings CC',
}

export enum ButtonType {
  number = 'number',
  operation = 'operation',
  operator = 'operator',
  dot = 'dot',
  bracket = 'bracket',
}

export const BUTTONS = [
  { value: 'C', type: ButtonType.operation },
  { value: '7', type: ButtonType.number },
  { value: '8', type: ButtonType.number },
  { value: '9', type: ButtonType.number },
  { value: '*', type: ButtonType.operator },
  { value: '-', type: ButtonType.operator },
  { value: '4', type: ButtonType.number },
  { value: '5', type: ButtonType.number },
  { value: '6', type: ButtonType.number },
  { value: '/', type: ButtonType.operator },
  // { value: '÷', type: ButtonType.operator },
  { value: '+', type: ButtonType.operator },
  { value: '1', type: ButtonType.number },
  { value: '2', type: ButtonType.number },
  { value: '3', type: ButtonType.number },
  { value: '=', type: ButtonType.operation },
  { value: '.', type: ButtonType.dot },
  { value: '(', type: ButtonType.bracket },
  { value: '0', type: ButtonType.number },
  { value: ')', type: ButtonType.bracket },
  { value: 'CE', type: ButtonType.operation },
  { value: '%', type: ButtonType.operator },
  { value: '±', type: ButtonType.operation },
];

export const OPERATORS = BUTTONS.filter((el) => el.type === ButtonType.operator).map((el) => el.value);
export const NUMBERS = BUTTONS.filter((el) => el.type === ButtonType.number).map((el) => el.value);
export const BRACKETS = BUTTONS.filter((el) => el.type === ButtonType.bracket).map((el) => el.value);

export enum ErrorMessage {
  operator = 'The expression ended with an operator.',
  unsupported = 'The expression contains an unsupported character',
  bracket = "You didn't close the bracket",
  calculationError = "Result can't be calculated calculate",
}
