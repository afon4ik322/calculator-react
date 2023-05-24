import { Component } from 'react';
import C from '@styles';

import { CalculatorButtonProps } from './button-types';

class CalculatorButtonCC extends Component<CalculatorButtonProps> {
  render() {
    const { value, type, keypadHandler } = this.props;

    return (
      <C.button onClick={() => keypadHandler(value, type)} data-test-id='calculator-button'>
        {value}
      </C.button>
    );
  }
}

export default CalculatorButtonCC;
