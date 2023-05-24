import { useState } from 'react';
import { keypadHandler as keypadHandlerFunc } from '@components/calculator/keypad-handler-fc';
import DisplayFC from '@components/display/display-fc';
import HistoryFC from '@components/history/history-fc';
import KeypadFC from '@components/keypad/keypad-fc';
import { useAppDispatch } from '@store';
import { addHistory } from '@store/slices/history-slice';
import { validCharacters } from '@utils/parse-string';

import S from './calculator.styled';

const CalculatorFC = () => {
  const [result, setResult] = useState<string>('0');
  const [calculationsInput, setCalculationsInput] = useState<string>('');
  const [currentNumber, setCurrentNumber] = useState<string>('');
  const [error, setError] = useState<string>('');
  const dispatch = useAppDispatch();
  const addHistoryDispatched = (str: string) => dispatch(addHistory(str));

  const onInputChange = (str: string) => {
    const arr = str.split('').filter((el) => validCharacters.includes(el));

    setCurrentNumber('');
    setCalculationsInput(arr.join(''));
  };

  const keypadHandler = (value: string, type: string) =>
    keypadHandlerFunc(
      value,
      type,
      calculationsInput,
      setCalculationsInput,
      currentNumber,
      setCurrentNumber,
      result,
      setResult,
      setError,
      addHistoryDispatched
    );

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
