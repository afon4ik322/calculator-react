import { ButtonType, OPERATORS } from '@constants/constants';
import { calculateResult } from '@utils/calculate-result';

export const keypadHandler = (
  value: string,
  type: string,
  calculationsInput: string,
  setCalculationsInput: React.Dispatch<React.SetStateAction<string>>,
  currentNumber: string,
  setCurrentNumber: React.Dispatch<React.SetStateAction<string>>,
  result: string,
  setResult: React.Dispatch<React.SetStateAction<string>>,
  setError: React.Dispatch<React.SetStateAction<string>>,
  addHistoryDispatched: (str: string) => { payload: string; type: 'history/addHistory' }
) => {
  switch (type) {
    case ButtonType.number:
      result && setResult('');
      setCurrentNumber((prev) => prev + value);
      break;
    case ButtonType.operator: {
      setCalculationsInput((prev) => prev + currentNumber);
      setCurrentNumber('');
      if (!(calculationsInput.length === 0) || !(currentNumber.length === 0)) {
        !OPERATORS.some((el) => el === calculationsInput[calculationsInput.length - 1] && currentNumber.length === 0)
          ? setCalculationsInput((prev) => prev + value)
          : setCalculationsInput((prev) => prev.slice(0, -1) + value);
      }
      break;
    }
    case ButtonType.operation:
      switch (value) {
        case 'CE':
          currentNumber.length > 0
            ? setCurrentNumber((prev) => prev.slice(0, -1))
            : setCalculationsInput((prev) => prev.slice(0, -1));
          break;
        case 'C':
          setCurrentNumber('');
          setCalculationsInput('');
          break;
        case '=':
          if (!((calculationsInput + currentNumber).length === 0)) {
            calculateResult(
              calculationsInput + currentNumber,
              setCalculationsInput,
              setResult,
              (str: string) => addHistoryDispatched(str),
              setError
            );
            setCurrentNumber('');
          }
          break;
        case '±':
          setCurrentNumber((prev) => (prev.length > 0 && !(prev[1] === '-') ? `(-${prev})` : prev.slice(2, -1)));
          break;
      }
      break;
    case ButtonType.dot: {
      if (currentNumber === '') {
        setCurrentNumber('0.');
      } else if (!currentNumber.includes('.')) {
        setCurrentNumber((prev) => prev + value);
      }
      break;
    }
    case ButtonType.bracket: {
      if (currentNumber === '') {
        setCalculationsInput((prev) => prev + value);
      } else {
        setCalculationsInput((prev) => prev + currentNumber + value);
        setCurrentNumber('');
      }

      break;
    }
  }
};
