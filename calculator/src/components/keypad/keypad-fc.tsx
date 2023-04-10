import { FC } from 'react';
import CalculatorButtonFC from '../button/button-fc';
import { BUTTONS, ButtonType, OPERATORS } from '../../constants/constants';
import S from './keypad.styled';

interface KeypadPropsType {
  calculationsInput: string;
  setCalculationsInput: React.Dispatch<React.SetStateAction<string>>;
  currentNumber: string;
  setCurrentNumber: React.Dispatch<React.SetStateAction<string>>;
  setResult: React.Dispatch<React.SetStateAction<string>>;
}

const KeypadFC: FC<KeypadPropsType> = ({
  calculationsInput,
  setCalculationsInput,
  currentNumber,
  setCurrentNumber,
  setResult,
}) => {
  const keypadHandler = (value: string, type: string) => {
    switch (type) {
      case ButtonType.number:
        setCurrentNumber((prev) => prev + value);
        setCalculationsInput((prev) => prev + value);
        break;
      case ButtonType.operator: {
        !OPERATORS.some((el) => el === calculationsInput[calculationsInput.length - 1])
          ? setCalculationsInput((prev) => prev + value)
          : setCalculationsInput((prev) => prev.slice(0, -1) + value);
        setCurrentNumber('');
        break;
      }
      case ButtonType.operation:
        if (value === 'CE') {
          setCalculationsInput((prev) => prev.slice(0, -1));
        }
        if (value === 'C') {
          setCurrentNumber('');
          setCalculationsInput('');
        }
        if (value === '=') {
          try {
            setResult(eval(calculationsInput.toString())); //TEMPORARY SOLUTION!!!!!!!!
            setCalculationsInput('');
          } catch (e) {
            console.log(e);
            setResult('Error');
            setCalculationsInput('');
          }
        }
        break;
      case ButtonType.dot: {
        if (!currentNumber.includes('.')) {
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
