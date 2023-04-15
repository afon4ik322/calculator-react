import { Component } from 'react';
import S from './calculator.styled';
import DisplayCC from '../display/display-cc';
import KeypadCC from '../keypad/keypad-cc';
import HistoryCC from '../history/history-cc';
import { ButtonType, OPERATORS } from '../../constants/constants';
import { calculateResult } from '../../utils/calculate';
import { addHistory } from '../../store/slices/history-slice';
import { connect } from 'react-redux';

const mapDispatchToProps = {
  addHistory,
};

interface CalculatorCCProps {
  addHistory: (str: string) => void;
}

interface CalculatorCCState {
  result: string;
  calculationsInput: string;
  currentNumber: string;
  error: string;
}

class CalculatorCC extends Component<CalculatorCCProps, CalculatorCCState> {
  constructor(props: CalculatorCCProps) {
    super(props);
    this.state = {
      result: '0',
      calculationsInput: '',
      currentNumber: '',
      error: '',
    };
  }
  render() {
    const { result, calculationsInput, currentNumber, error } = this.state;
    const { addHistory } = this.props;

    const setError = (err: string) => {
      this.setState({ error: err });
    };

    const setResult = (str: string) => {
      this.setState({ result: str });
    };

    const setCalculationsInput = (str: string) => {
      this.setState({ calculationsInput: str });
    };

    const setCurrentNumber = (str: string) => {
      this.setState({ currentNumber: str });
    };

    const onInputChange = (str: string) => {
      this.setState({ currentNumber: '', calculationsInput: str });
    };

    const keypadHandler = (value: string, type: string) => {
      switch (type) {
        case ButtonType.number:
          result && this.setState({ result: '' });
          this.setState((prev) => ({
            currentNumber: prev.currentNumber + value,
          }));
          break;
        case ButtonType.operator: {
          this.setState((prev) => ({
            calculationsInput: prev.calculationsInput + currentNumber,
            currentNumber: '',
          }));

          if (!(calculationsInput.length === 0) || !(currentNumber.length === 0)) {
            !OPERATORS.some(
              (el) => el === calculationsInput[calculationsInput.length - 1] && currentNumber.length === 0
            )
              ? this.setState((prev) => ({
                  calculationsInput: prev.calculationsInput + value,
                }))
              : this.setState((prev) => ({
                  calculationsInput: prev.calculationsInput.slice(0, -1) + value,
                }));
          }
          break;
        }
        case ButtonType.operation:
          switch (value) {
            case 'CE':
              currentNumber.length > 0
                ? this.setState((prev) => ({
                    currentNumber: prev.currentNumber.slice(0, -1),
                  }))
                : this.setState((prev) => ({
                    calculationsInput: prev.calculationsInput.slice(0, -1),
                  }));

              break;
            case 'C':
              this.setState((prev) => ({
                currentNumber: '',
                calculationsInput: '',
              }));
              break;
            case '=':
              if (!((calculationsInput + currentNumber).length === 0)) {
                calculateResult(
                  calculationsInput + currentNumber,
                  setCalculationsInput,
                  setResult,
                  addHistory,
                  setError
                );
                setCurrentNumber('');
              }
              break;
            case '±':
              setCurrentNumber(
                currentNumber.length > 0 && !(currentNumber[1] === '-')
                  ? `(-${currentNumber})`
                  : currentNumber.slice(2, -1)
              );
              break;
          }
          break;
        case ButtonType.dot: {
          if (currentNumber === '') {
            setCurrentNumber(currentNumber + '0.');
          } else if (!currentNumber.includes('.')) {
            this.setState((prev) => ({
              currentNumber: prev.currentNumber + value,
            }));
          }
          break;
        }
        case ButtonType.bracket: {
          if (currentNumber === '') {
            this.setState((prev) => ({
              calculationsInput: prev.calculationsInput + value,
            }));
          } else {
            this.setState((prev) => ({
              calculationsInput: prev.calculationsInput + currentNumber + value,
              currentNumber: '',
            }));
          }
          break;
        }
      }
    };

    if (error) throw new Error(error);

    return (
      <S.container>
        <S.leftContainer>
          <DisplayCC
            result={result}
            calculationsInput={calculationsInput}
            currentNumber={currentNumber}
            onInputChange={onInputChange}
          />
          <KeypadCC keypadHandler={keypadHandler} />
        </S.leftContainer>
        <S.rightContainer>
          <HistoryCC />
        </S.rightContainer>
      </S.container>
    );
  }
}

export default connect(null, mapDispatchToProps)(CalculatorCC);
