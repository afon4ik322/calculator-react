import { useState } from 'react';

import { ButtonType, OPERATORS } from '@constants/constants';
import { calculateResult } from '@utils/calculate';
import { addHistory } from '@store/slices/history-slice';
import { useAppDispatch } from '@store';
import DisplayFC from '@components/display/display-fc';
import HistoryFC from '@components/history/history-fc';
import KeypadFC from '@components/keypad/keypad-fc';

import S from './calculator.styled';

const CalculatorFC = () => {
  const [result, setResult] = useState<string>('0');
  const [calculationsInput, setCalculationsInput] = useState<string>('');
  const [currentNumber, setCurrentNumber] = useState<string>('');
  const [error, setError] = useState<string>('');
  const dispatch = useAppDispatch();

  const onInputChange = (str: string) => {
    setCurrentNumber('');
    setCalculationsInput(str);
  };

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
            if (!((calculationsInput + currentNumber).length === 0)) {
              calculateResult(
                calculationsInput + currentNumber,
                setCalculationsInput,
                setResult,
                (str: string) => dispatch(addHistory(str)),
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

  if (error) throw new Error(error);

  return (
    <S.container>
      <S.leftContainer>
        <DisplayFC
          result={result}
          calculationsInput={calculationsInput}
          currentNumber={currentNumber}
          onInputChange={onInputChange}
        />
        <KeypadFC keypadHandler={keypadHandler} />
      </S.leftContainer>
      <S.rightContainer>
        <HistoryFC />
      </S.rightContainer>
    </S.container>
  );
};

export default CalculatorFC;
