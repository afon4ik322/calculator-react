import { useState } from 'react';
import DisplayFC from '../display/display-fc';
import HistoryFC from '../history/history-fc';
import KeypadFC from '../keypad/keypad-fc';
import S from './calculator.styled';

const CalculatorFC = () => {
  const [result, setResult] = useState('0');
  const [calculationsInput, setCalculationsInput] = useState('');
  const [currentNumber, setCurrentNumber] = useState('');

  return (
    <S.container>
      <S.leftContainer>
        <DisplayFC result={result} calculationsInput={calculationsInput} />
        <KeypadFC
          calculationsInput={calculationsInput}
          setCalculationsInput={setCalculationsInput}
          currentNumber={currentNumber}
          setCurrentNumber={setCurrentNumber}
          setResult={setResult}
        />
      </S.leftContainer>
      <S.rightContainer>
        <HistoryFC />
      </S.rightContainer>
    </S.container>
  );
};

export default CalculatorFC;
