import { FC } from 'react';
import CalculatorButtonFC from '../button/button-fc';
import { BUTTONS } from '../../constants/constants';
import S from './keypad.styled';

const KeypadFC: FC = () => (
  <S.container>
    {BUTTONS.map((button) => (
      <CalculatorButtonFC {...button} />
    ))}
  </S.container>
);

export default KeypadFC;
