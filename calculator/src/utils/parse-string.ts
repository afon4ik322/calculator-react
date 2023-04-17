import { BRACKETS, ErrorMessage, NUMBERS, OPERATORS } from '@constants/constants';

export const parseString = (str: string): Array<string | number> => {
  const arr = str.split('');

  arr.forEach((item) => {
    if (!'1234567890()+-*÷/%.'.includes(item)) throw new Error(ErrorMessage.unsupported);
  });

  if (!(OPERATORS.findIndex((el) => el === arr[arr.length - 1]) === -1)) {
    throw new Error(ErrorMessage.operator);
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
