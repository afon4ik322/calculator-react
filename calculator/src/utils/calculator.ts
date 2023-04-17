import { ErrorMessage, OPERATORS } from '@constants/constants';
import { parseString } from './parse-string';

//PARSE STRING, CALC RESULT, ROUND RESULT
export const calculateResultFunc = (str: string): string => {
  const arr = parseString(str);
  const calculated = calculateByOperators(arr);
  const result = Math.round(calculated * 1000) / 1000;

  if (Number.isNaN(result)) throw new Error(ErrorMessage.calculationError);

  return result.toString();
};

//OPERATIONS (fix 0.30000000000000004)
const addition = (x: number, y: number) => (x * 1000 + y * 1000) / 1000;
const subtraction = (x: number, y: number) => (x * 1000 - y * 1000) / 1000;
const multiplication = (x: number, y: number) => (1000 * x * y) / 1000;
const division = (x: number, y: number) => x / y;
const remainder = (x: number, y: number) => x % y;

// CALCULATE BY OPERATORS
const calculateByOperators = (arr: Array<string | number>) => {
  let stack = [...arr];

  // BRACKETS ()
  if (!(stack.findIndex((el) => el === '(') === -1)) {
    bracketOperations(stack);
  }

  // PRIORITY OPERATIONS (*, /, %)
  if (
    !(stack.findIndex((el) => el === '*') === -1) ||
    !(stack.findIndex((el) => el === '÷') === -1) ||
    !(stack.findIndex((el) => el === '/') === -1) ||
    !(stack.findIndex((el) => el === '%') === -1)
  ) {
    priorityOperations(stack);
  }

  return calculateIntermediateResult(stack);
};

// BRACKET OPERATION
function bracketOperations(stack: Array<string | number>): Array<string | number> {
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

  const closeBrackets: Array<InitialReduceValue> = stack.reduce((acc, el, i) => {
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
        const num = calculateIntermediateResult(priorityOperations(arr));
        stack.splice(openBrackets[j].i, closeBrackets[i].i - openBrackets[j].i + 1, num);
        // ПОВТОРНЫЙ ПОИСК СКОБОК ~ РЕКУРСИЯ
        return bracketOperations(stack);
      }
    }
  }

  return stack;
}

// PRIORITY OPERATIONS (*, /, %)
function priorityOperations(stack: Array<string | number>): Array<string | number> {
  // ПРОВЕРКА НА 1 ЧИСЛО И МИНУС
  if (stack.length < 3) {
    return stack;
  }
  for (let i = 0; i < stack.length; i++) {
    if (!(['*', '÷', '/', '%'].findIndex((el) => el === stack[i]) === -1)) {
      let num = calculateIntermediateResult([stack[i - 1], stack[i], stack[i + 1]]);
      stack.splice(i - 1, 3, num);
      i -= 2;
    }
  }

  return stack;
}

//CALCULATE INTERMEDIATE RESULT
function calculateIntermediateResult(arr: Array<string | number>): number {
  // ПРОВЕРКА НА 1 ЧИСЛО И МИНУС
  if (arr[0] === '-') {
    let item = arr[0] + arr[1];
    arr.splice(0, 1, item);
  }

  let result = Number(arr[0]);

  for (let i = 1; i < arr.length; i++) {
    if (!(OPERATORS.findIndex((el) => el === arr[i]) === -1)) {
      switch (arr[i]) {
        case '+':
          result = addition(result, Number(arr[i + 1]));
          break;
        case '-':
          result = subtraction(result, Number(arr[i + 1]));
          break;
        case '*':
          result = multiplication(result, Number(arr[i + 1]));
          break;
        case '÷':
          result = division(result, Number(arr[i + 1]));
          break;
        case '/':
          result = division(result, Number(arr[i + 1]));
          break;
        case '%':
          result = remainder(result, Number(arr[i + 1]));
          break;
      }
    }
  }

  return result;
}
