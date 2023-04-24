import { FC } from 'react';
import CalculatorButtonFC from '@components/button/button-fc';
import { BUTTONS } from '@constants/constants';

import S from './keypad.styled';
import { KeypadPropsType } from './keypad-types';

const KeypadFC: FC<KeypadPropsType> = ({ keypadHandler }) => (
  <S.container>
    {BUTTONS.map((button) => (
      <CalculatorButtonFC {...button} key={button.value} keypadHandler={keypadHandler} />
    ))}
  </S.container>
);

export default KeypadFC;
