import { BRACKETS, NUMBERS, OPERATORS } from '../constants/constants';

export const calculateResult = (
  input: string,
  setInput: (str: string) => void,
  setResult: (str: string) => void,
  addHistory: (str: string) => void
) => {
  try {
    setResult(calculateResultFunc(input));
    addHistory(`${input} = ${calculateResultFunc(input)}`);
  } catch (e) {
    console.log(e);
    setResult('Error');
  } finally {
    setInput('');
  }
};

//PARSE STRING
const parseString = (str: string): Array<string | number> => {
  const arr = str.split('');

  if (!(OPERATORS.findIndex((el) => el === arr[arr.length - 1]) === -1)) {
    throw new Error('Error: You ended the expression with an operator.');
  }

  const modifiedArr = [];
  let currentNumber = '';
  for (let i = 0; i < arr.length; i++) {
    if (!(NUMBERS.findIndex((el) => el === arr[i]) === -1) || arr[i] === '.') {
      currentNumber += arr[i];
    }
    if (!(OPERATORS.findIndex((el) => el === arr[i]) === -1) || !(BRACKETS.findIndex((el) => el === arr[i]) === -1)) {
      if (currentNumber !== '') {
        modifiedArr.push(Number(currentNumber));
        currentNumber = '';
      }

      modifiedArr.push(arr[i]);
    }
  }
  modifiedArr.push(Number(currentNumber));
  return modifiedArr;
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
    !(stack.findIndex((el) => el === '%') === -1)
  ) {
    priorityOperations(stack);
  }

  return calculateIntermediateResult(stack);
};

// BRACKET OPERATION
function bracketOperations(stack: Array<string | number>): Array<string | number> {
  const bracketStart = stack.findIndex((el) => el === '(');
  const bracketEnd = stack.findIndex((el) => el === ')');

  if (bracketEnd === -1) {
    throw new Error("Error: you didn't close the bracket");
  }
  let arr = stack.slice(bracketStart + 1, bracketEnd);
  arr = priorityOperations(arr);
  let num = calculateIntermediateResult(arr);
  stack.splice(bracketStart, bracketEnd + 1, num);

  // ПОВТОРНЫЙ ПОИСК СКОБОК ~ РЕКУРСИЯ
  if (!(stack.findIndex((el) => el === '(') === -1)) {
    bracketOperations(stack);
  }

  return stack;
}

// PRIORITY OPERATIONS (*, /, %)
function priorityOperations(stack: Array<string | number>): Array<string | number> {
  for (let i = 0; i < stack.length; i++) {
    if (!(['*', '÷', '%'].findIndex((el) => el === stack[i]) === -1)) {
      let num = calculateIntermediateResult([stack[i - 1], stack[i], stack[i + 1]]);
      stack.splice(i - 1, 3, num);
      i -= 2;
    }
  }
  return stack;
}

//CALCULATE INTERMEDIATE RESULT
function calculateIntermediateResult(arr: Array<string | number>): number {
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
        case '%':
          result = remainder(result, Number(arr[i + 1]));
          break;
      }
    }
  }

  return result;
}

//PARSE STRING, CALC RESULT, ROUND RESULT

const calculateResultFunc = (str: string): string => {
  const arr = parseString(str);
  const calculated = calculateByOperators(arr);
  const result = Math.round(calculated * 1000) / 1000;

  return result.toString();
};
