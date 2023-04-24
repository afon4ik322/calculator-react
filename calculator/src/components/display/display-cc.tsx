import { Component } from 'react';
import { DisplayPropsType } from '@components/display/display-fc';

import S from './display.styled';

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
        <div data-test-id='calculator-result'>{result}</div>
      </S.container>
    );
  }
}

export default DisplayCC;
