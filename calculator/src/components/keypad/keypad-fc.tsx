import { FC } from 'react';
import { BUTTONS } from '@constants/constants';
import CalculatorButtonFC from '@components/button/button-fc';
import S from './keypad.styled';

interface KeypadPropsType {
  keypadHandler: (value: string, type: string) => void;
}

const KeypadFC: FC<KeypadPropsType> = ({ keypadHandler }) => {
  return (
    <S.container>
      {BUTTONS.map((button) => (
        <CalculatorButtonFC {...button} key={button.value} keypadHandler={keypadHandler} />
      ))}
    </S.container>
  );
};

export default KeypadFC;
