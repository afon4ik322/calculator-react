import { Component } from 'react';
import { BUTTONS } from '@constants/constants';
import CalculatorButtonCC from '@components/button/button-cc';
import S from './keypad.styled';

interface KeypadPropsType {
  keypadHandler: (value: string, type: string) => void;
}

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
