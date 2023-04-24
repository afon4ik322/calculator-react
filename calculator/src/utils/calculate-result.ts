import { ErrorMessage } from '@constants/constants';

import { calculateByOperators } from './calculator';
import { Calculator } from './command-pattern';
import { parseString } from './parse-string';

const calculateResultFunc = (str: string): string => {
  const arr = parseString(str);
  const calculator = new Calculator();
  const calculated = calculateByOperators(arr, calculator);
  const result = Math.round(calculated * 1000) / 1000;

  if (Number.isNaN(result)) throw new Error(ErrorMessage.calculationError);

  return result.toString();
};

export const calculateResult = (
  input: string,
  setInput: (str: string) => void,
  setResult: (str: string) => void,
  addHistory: (str: string) => void,
  setError: (err: string) => void
) => {
  try {
    setResult(calculateResultFunc(input));
    addHistory(`${input} = ${calculateResultFunc(input)}`);
  } catch (e) {
    setError(e as string);
  } finally {
    setInput('');
  }
};
