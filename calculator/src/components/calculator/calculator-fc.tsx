import { useState } from 'react';
import DisplayFC from '../display/display-fc';
import HistoryFC from '../history/history-fc';
import KeypadFC from '../keypad/keypad-fc';
import S from './calculator.styled';

const CalculatorFC = () => {
  const [result, setResult] = useState('0');
  const [calculationsInput, setCalculationsInput] = useState('');

  return (
    <S.container>
      <S.leftContainer>
        <DisplayFC result={result} calculationsInput={calculationsInput} setCalculationsInput={setCalculationsInput} />
        <KeypadFC
          calculationsInput={calculationsInput}
          setCalculationsInput={setCalculationsInput}
          result={result}
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
