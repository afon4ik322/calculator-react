import { Component } from 'react';
import { CalculatorButtonProps } from '@components/button/button-fc';

import S from './button.styled';

class CalculatorButtonCC extends Component<CalculatorButtonProps> {
  render() {
    const { value, type, keypadHandler } = this.props;

    return (
      <S.button onClick={() => keypadHandler(value, type)} data-test-id='calculator-button'>
        {value}
      </S.button>
    );
  }
}

export default CalculatorButtonCC;
