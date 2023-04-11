import { NUMBERS, OPERATORS } from '../constants/constants';
import { addHistory } from '../store/slices/history-slice';

export const calculateResult = (
  input: string,
  setInput: React.Dispatch<React.SetStateAction<string>>,
  setResult: React.Dispatch<React.SetStateAction<string>>,
  dispatch: any
) => {
  try {
    setResult(calculateResultFunc(input));
    dispatch(addHistory(`${input} = ${calculateResultFunc(input)}`));
  } catch (e) {
    console.log(e);
    setResult('Error');
  } finally {
    setInput('');
  }
};

//OPERATIONS (fix 0.30000000000000004)
const addition = (x: number, y: number) => (x * 1000 + y * 1000) / 1000;
const subtraction = (x: number, y: number) => (x * 1000 - y * 1000) / 1000;
const multiplication = (x: number, y: number) => (1000 * x * y) / 1000;
const division = (x: number, y: number) => x / y;

//PARSESTRING
const parseString = (str: string): (string | number)[] => {
  const arr = str.split('');

  if (NUMBERS.findIndex((el) => el === arr[arr.length - 1]) === -1) {
    throw new Error('Error: You ended the expression with an operator.');
  }

  const modifiedArr = [];
  let currentNumber = '';
  for (let i = 0; i < arr.length; i++) {
    if (!(NUMBERS.findIndex((el) => el === arr[i]) === -1) || arr[i] === '.') {
      currentNumber += arr[i];
    }
    if (!(OPERATORS.findIndex((el) => el === arr[i]) === -1)) {
      modifiedArr.push(Number(currentNumber));
      modifiedArr.push(arr[i]);
      currentNumber = '';
    }
  }
  modifiedArr.push(Number(currentNumber));
  return modifiedArr;
};

//CALCULATE_RESULT
const calculateResultFunc = (str: string) => {
  const arr = parseString(str);

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
      }
    }
  }
  result = Math.round(result * 1000) / 1000;
  return result.toString();
};
