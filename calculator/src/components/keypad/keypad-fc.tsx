import { FC, useState } from 'react';
import { BUTTONS, ButtonType, OPERATORS } from '../../constants/constants';
import { useAppDispatch } from '../../store';
import { calculateResult } from '../../utils/calculate';
import CalculatorButtonFC from '../button/button-fc';
import S from './keypad.styled';
import { addHistory } from '../../store/slices/history-slice';

interface KeypadPropsType {
  calculationsInput: string;
  setCalculationsInput: React.Dispatch<React.SetStateAction<string>>;
  result: string;
  setResult: React.Dispatch<React.SetStateAction<string>>;
  currentNumber: string;
  setCurrentNumber: React.Dispatch<React.SetStateAction<string>>;
}

const KeypadFC: FC<KeypadPropsType> = ({
  calculationsInput,
  setCalculationsInput,
  result,
  setResult,
  currentNumber,
  setCurrentNumber,
}) => {
  const [error, setError] = useState<string>('');
  const dispatch = useAppDispatch();

  const keypadHandler = (value: string, type: string) => {
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
            calculateResult(
              calculationsInput + currentNumber,
              setCalculationsInput,
              setResult,
              (str: string) => dispatch(addHistory(str)),
              setError
            );
            setCurrentNumber('');
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

  if (error) throw new Error(error);

  return (
    <S.container>
      {BUTTONS.map((button) => (
        <CalculatorButtonFC {...button} key={button.value} keypadHandler={keypadHandler} />
      ))}
    </S.container>
  );
};

export default KeypadFC;
