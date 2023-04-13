import { Component } from 'react';
import S from './keypad.styled';
import { BUTTONS, ButtonType, OPERATORS } from '../../constants/constants';
import CalculatorButtonCC from '../button/button-cc';
import { calculateResult } from '../../utils/calculate';
import { addHistory } from '../../store/slices/history-slice';
import { connect } from 'react-redux';

interface KeypadPropsType {
  calculationsInput: string;
  setCalculationsInput: (str: string) => void;
  result: string;
  setResult: (str: string) => void;
  addHistory: (str: string) => void;
}

const mapDispatchToProps = {
  addHistory,
};

class KeypadCC extends Component<KeypadPropsType, { currentNumber: string; error: string }> {
  constructor(props: KeypadPropsType) {
    super(props);
    this.state = {
      currentNumber: '',
      error: '',
    };
  }

  render() {
    const { calculationsInput, setCalculationsInput, result, setResult, addHistory } = this.props;
    const { currentNumber, error } = this.state;

    const setCurrentNumber = (str: string) => {
      this.setState({ currentNumber: str });
    };

    const setError = (err: string) => {
      this.setState({ error: err });
    };

    const keypadHandler = (value: string, type: string) => {
      switch (type) {
        case ButtonType.number:
          result && setResult('');
          setCurrentNumber(currentNumber + value);
          setCalculationsInput(calculationsInput + value);
          break;
        case ButtonType.operator: {
          if (!(calculationsInput.length === 0)) {
            !OPERATORS.some((el) => el === calculationsInput[calculationsInput.length - 1])
              ? setCalculationsInput(calculationsInput + value)
              : setCalculationsInput(calculationsInput.slice(0, -1) + value);
          }
          setCurrentNumber('');
          break;
        }
        case ButtonType.operation:
          switch (value) {
            case 'CE':
              setCalculationsInput(calculationsInput.slice(0, -1));
              break;
            case 'C':
              setCurrentNumber('');
              setCalculationsInput('');
              break;
            case '=':
              calculateResult(calculationsInput, setCalculationsInput, setResult, addHistory, setError);
              setCurrentNumber('');
              break;
          }
          break;
        case ButtonType.dot: {
          if (currentNumber === '') {
            setCalculationsInput(calculationsInput + '0.');
            setCurrentNumber(currentNumber + '0.');
          } else if (!currentNumber.includes('.')) {
            setCalculationsInput(calculationsInput + value);
            setCurrentNumber(currentNumber + value);
          }
          break;
        }
        case ButtonType.bracket: {
          setCalculationsInput(calculationsInput + value);
          break;
        }
      }
    };

    if (error) throw new Error(error);

    return (
      <S.container>
        {BUTTONS.map((button) => (
          <CalculatorButtonCC {...button} key={button.value} keypadHandler={keypadHandler} />
        ))}
      </S.container>
    );
  }
}

export default connect(null, mapDispatchToProps)(KeypadCC);
