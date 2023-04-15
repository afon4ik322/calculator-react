import { Component } from 'react';
import S from './display.styled';
import { DisplayPropsType } from './display-fc';

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
