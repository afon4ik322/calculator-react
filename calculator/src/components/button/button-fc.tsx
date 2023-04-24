import C from '@styles';

import { CalculatorButtonProps } from './button-types';

const CalculatorButtonFC = ({ value, type, keypadHandler }: CalculatorButtonProps) => (
  <C.button data-test-id='calculator-button' onClick={() => keypadHandler(value, type)}>
    {value}
  </C.button>
);

export default CalculatorButtonFC;
