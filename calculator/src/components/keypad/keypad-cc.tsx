import { Component } from 'react';
import CalculatorButtonCC from '@components/button/button-cc';
import { BUTTONS } from '@constants/constants';

import S from './keypad.styled';
import { KeypadPropsType } from './keypad-types';

class KeypadCC extends Component<KeypadPropsType> {
  render() {
    const { keypadHandler } = this.props;

    return (
      <S.container>
        {BUTTONS.map((button) => (
          <CalculatorButtonCC {...button} key={button.value} keypadHandler={keypadHandler} />
        ))}
      </S.container>
    );
  }
}

export default KeypadCC;
