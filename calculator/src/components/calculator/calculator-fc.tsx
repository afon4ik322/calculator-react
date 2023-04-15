import { useState } from 'react';
import DisplayFC from '../display/display-fc';
import HistoryFC from '../history/history-fc';
import KeypadFC from '../keypad/keypad-fc';
import S from './calculator.styled';
import ErrorBoundary from '../error-boundary/error-boundary';

const CalculatorFC = () => {
  const [result, setResult] = useState<string>('0');
  const [calculationsInput, setCalculationsInput] = useState<string>('');
  const [currentNumber, setCurrentNumber] = useState<string>('');

  return (
    <ErrorBoundary>
      <S.container>
        <S.leftContainer>
          <DisplayFC
            result={result}
            calculationsInput={calculationsInput}
            setCalculationsInput={setCalculationsInput}
            currentNumber={currentNumber}
          />
          <KeypadFC
            calculationsInput={calculationsInput}
            setCalculationsInput={setCalculationsInput}
            result={result}
            setResult={setResult}
            currentNumber={currentNumber}
            setCurrentNumber={setCurrentNumber}
          />
        </S.leftContainer>
        <S.rightContainer>
          <HistoryFC />
        </S.rightContainer>
      </S.container>
    </ErrorBoundary>
  );
};

export default CalculatorFC;
