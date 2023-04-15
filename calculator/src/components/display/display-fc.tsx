import { FC } from 'react';
import S from './display.styled';

export interface DisplayPropsType {
  result: string;
  calculationsInput: string;
  currentNumber: string;
  onInputChange: (str: string) => void;
}

const DisplayFC: FC<DisplayPropsType> = ({ result, calculationsInput, currentNumber, onInputChange }) => {
  return (
    <S.container>
      <S.calculatorInput
        type='text'
        value={calculationsInput + currentNumber}
        onChange={(e) => onInputChange(e.target.value)}
        data-test-id='calculator-input'
      />
      <div data-test-id='calculator-result'>{result}</div>
    </S.container>
  );
};

export default DisplayFC;
