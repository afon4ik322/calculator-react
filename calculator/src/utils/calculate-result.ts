import { calculateResultFunc } from './calculator';

export const calculateResult = (
  input: string,
  setInput: (str: string) => void,
  setResult: (str: string) => void,
  addHistory: (str: string) => void,
  setError: (err: any) => void
) => {
  try {
    setResult(calculateResultFunc(input));
    addHistory(`${input} = ${calculateResultFunc(input)}`);
  } catch (e) {
    setError(e);
  } finally {
    setInput('');
  }
};
