import { Component } from 'react';
import S from './calculator.styled';
import DisplayCC from '../display/display-cc';
import KeypadCC from '../keypad/keypad-cc';
import HistoryCC from '../history/history-cc';
import ErrorBoundary from '../error-boundary/error-boundary';

class CalculatorCC extends Component<{}, { result: string; calculationsInput: string }> {
  constructor(props: {}) {
    super(props);
    this.state = {
      result: '0',
      calculationsInput: '',
    };
  }
  render() {
    const setCalculationsInput = (str: string) => {
      this.setState({ calculationsInput: str });
    };

    const setResult = (str: string) => {
      this.setState({ result: str });
    };

    const { result, calculationsInput } = this.state;

    return (
      <ErrorBoundary>
        <S.container>
          <S.leftContainer>
            <DisplayCC
              result={result}
              calculationsInput={calculationsInput}
              setCalculationsInput={setCalculationsInput}
            />
            <KeypadCC
              calculationsInput={calculationsInput}
              setCalculationsInput={setCalculationsInput}
              result={result}
              setResult={setResult}
            />
          </S.leftContainer>
          <S.rightContainer>
            <HistoryCC />
          </S.rightContainer>
        </S.container>
      </ErrorBoundary>
    );
  }
}

export default CalculatorCC;
