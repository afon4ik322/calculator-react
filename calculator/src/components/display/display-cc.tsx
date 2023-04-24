import { Component } from 'react';

import S from './display.styled';
import { DisplayPropsType } from './display-types';

class DisplayCC extends Component<DisplayPropsType> {
  render() {
    const { calculationsInput, currentNumber, result, onInputChange } = this.props;

    return (
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
  }
}

export default DisplayCC;
