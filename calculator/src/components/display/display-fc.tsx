import { FC } from 'react';

import S from './display.styled';
import { DisplayPropsType } from './display-types';

const DisplayFC: FC<DisplayPropsType> = ({ result, calculationsInput, currentNumber, onInputChange }) => (
  <S.container>
    <S.calculatorInput
      type='text'
      value={calculationsInput + currentNumber}
      onChange={(e) => onInputChange(e.target.value)}
      data-test-id='calculator-input'
    />
    <S.result data-test-id='calculator-result'>{result}</S.result>
  </S.container>
);

export default DisplayFC;
