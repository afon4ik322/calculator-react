import { Component } from 'react';
import S from './button.styled';
import { CalculatorButtonProps } from './button-fc';

class CalculatorButtonCC extends Component<CalculatorButtonProps> {
  render() {
    const { value, type, keypadHandler } = this.props;
    return <S.button onClick={() => keypadHandler(value, type)}>{value}</S.button>;
  }
}

export default CalculatorButtonCC;
