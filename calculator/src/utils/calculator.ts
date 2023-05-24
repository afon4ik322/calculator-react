import { ErrorMessage, OPERATORS } from '@constants/constants';

import { Calculator, Command } from './command-pattern';

// OPERATIONS (fix 0.30000000000000004)
const addition = (x: number, y: number) => (x * 1000 + y * 1000) / 1000;
const subtraction = (x: number, y: number) => (x * 1000 - y * 1000) / 1000;
const multiplication = (x: number, y: number) => (1000 * x * y) / 1000;
const division = (x: number, y: number) => x / y;
const remainder = (x: number, y: number) => x % y;

const AdditionCommand = function (value: number, current: number) {
  return new Command(addition, value, current);
};

const SubtractionCommand = function (value: number, current: number) {
  return new Command(subtraction, value, current);
};

const MultiplicationCommand = function (value: number, current: number) {
  return new Command(multiplication, value, current);
};

const DivisionCommand = function (value: number, current: number) {
  return new Command(division, value, current);
};

const RemainderCommand = function (value: number, current: number) {
  return new Command(remainder, value, current);
};

// CALCULATE BY OPERATORS
export const calculateByOperators = (arr: Array<string | number>, calculator: Calculator) => {
  const stack = [...arr];

  // BRACKETS ()
  if (!(stack.findIndex((el) => el === '(') === -1)) {
    bracketOperations(stack, calculator);
  }

  // PRIORITY OPERATIONS (*, /, %)
  if (
    !(stack.findIndex((el) => el === '*') === -1) ||
    !(stack.findIndex((el) => el === '÷') === -1) ||
    !(stack.findIndex((el) => el === '/') === -1) ||
    !(stack.findIndex((el) => el === '%') === -1)
  ) {
    priorityOperations(stack, calculator);
  }

  return calculateIntermediateResult(stack, calculator);
};

// BRACKET OPERATION
function bracketOperations(stack: Array<string | number>, calculator: Calculator): Array<string | number> {
  interface InitialReduceValue {
    el: '(' | ')';
    i: number;
  }

  const initialReduceValueOpen: InitialReduceValue[] = [];
  const initialReduceValueClose: InitialReduceValue[] = [];

  const openBrackets = stack.reduce((acc, el, i) => {
    if (el === '(') {
      acc.push({ el, i });
    }

    return acc;
  }, initialReduceValueOpen);

  const closeBrackets: InitialReduceValue[] = stack.reduce((acc, el, i) => {
    if (el === ')') {
      acc.push({ el, i });
    }

    return acc;
  }, initialReduceValueClose);

  if (openBrackets.length > closeBrackets.length) throw new Error(ErrorMessage.bracket);
  if (closeBrackets.length === 0) return stack;

  for (let i = 0; i < closeBrackets.length; i++) {
    for (let j = openBrackets.length - 1; j >= 0; j--) {
      if (closeBrackets[i].i > openBrackets[j].i) {
        const arr = stack.slice(openBrackets[j].i + 1, closeBrackets[i].i);
        const num = calculateIntermediateResult(priorityOperations(arr, calculator), calculator);

        stack.splice(openBrackets[j].i, closeBrackets[i].i - openBrackets[j].i + 1, num);

        // ПОВТОРНЫЙ ПОИСК СКОБОК ~ РЕКУРСИЯ
        return bracketOperations(stack, calculator);
      }
    }
  }

  return stack;
}

// PRIORITY OPERATIONS (*, /, %)
function priorityOperations(stack: Array<string | number>, calculator: Calculator): Array<string | number> {
  // ПРОВЕРКА НА 1 ЧИСЛО И МИНУС
  if (stack.length < 3) {
    return stack;
  }
  for (let i = 0; i < stack.length; i++) {
    if (!(['*', '÷', '/', '%'].findIndex((el) => el === stack[i]) === -1)) {
      const num = calculateIntermediateResult([stack[i - 1], stack[i], stack[i + 1]], calculator);

      stack.splice(i - 1, 3, num);
      i -= 2;
    }
  }

  return stack;
}

// CALCULATE INTERMEDIATE RESULT
function calculateIntermediateResult(arr: Array<string | number>, calculator: Calculator): number {
  // ПРОВЕРКА НА 1 ЧИСЛО И МИНУС
  if (arr[0] === '-') {
    const item = arr[0] + arr[1];

    arr.splice(0, 1, item);
  }

  let result = Number(arr[0]);

  for (let i = 1; i < arr.length; i++) {
    if (!(OPERATORS.findIndex((el) => el === arr[i]) === -1)) {
      const current = Number(arr[i + 1]);

      switch (arr[i]) {
        case '+':
          result = calculator.execute(AdditionCommand(result, current));
          break;
        case '-':
          result = calculator.execute(SubtractionCommand(result, current));
          break;
        case '*':
          result = calculator.execute(MultiplicationCommand(result, current));
          break;
        case '÷':
          result = calculator.execute(DivisionCommand(result, current));
          break;
        case '/':
          result = calculator.execute(DivisionCommand(result, current));
          break;
        case '%':
          result = calculator.execute(RemainderCommand(result, current));
          break;
      }
    }
  }

  return result;
}
