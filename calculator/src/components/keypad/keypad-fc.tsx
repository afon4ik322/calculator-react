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
}

const KeypadFC: FC<KeypadPropsType> = ({ calculationsInput, setCalculationsInput, result, setResult }) => {
  const [currentNumber, setCurrentNumber] = useState('');
  const dispatch = useAppDispatch();

  const keypadHandler = (value: string, type: string) => {
    switch (type) {
      case ButtonType.number:
        result && setResult('');
        setCurrentNumber((prev) => prev + value);
        setCalculationsInput((prev) => prev + value);
        break;
      case ButtonType.operator: {
        if (!(calculationsInput.length === 0)) {
          !OPERATORS.some((el) => el === calculationsInput[calculationsInput.length - 1])
            ? setCalculationsInput((prev) => prev + value)
            : setCalculationsInput((prev) => prev.slice(0, -1) + value);
        }
        setCurrentNumber('');
        break;
      }
      case ButtonType.operation:
        switch (value) {
          case 'CE':
            setCalculationsInput((prev) => prev.slice(0, -1));
            break;
          case 'C':
            setCurrentNumber('');
            setCalculationsInput('');
            break;
          case '=':
            calculateResult(calculationsInput, setCalculationsInput, setResult, (str: string) =>
              dispatch(addHistory(str))
            );
            setCurrentNumber('');
        }
        break;
      case ButtonType.dot: {
        if (currentNumber === '') {
          setCalculationsInput((prev) => prev + '0.');
          setCurrentNumber((prev) => prev + '0.');
        } else if (!currentNumber.includes('.')) {
          setCalculationsInput((prev) => prev + value);
          setCurrentNumber((prev) => prev + value);
        }
        break;
      }
      case ButtonType.bracket: {
        setCalculationsInput((prev) => prev + value);
        break;
      }
    }
  };

  return (
    <S.container>
      {BUTTONS.map((button) => (
        <CalculatorButtonFC {...button} key={button.value} keypadHandler={keypadHandler} />
      ))}
    </S.container>
  );
};

export default KeypadFC;
