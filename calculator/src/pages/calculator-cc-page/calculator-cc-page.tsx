import { Component } from 'react';
import CalculatorCC from '@components/calculator/calculator-cc';
import ErrorBoundary from '@components/error-boundary/error-boundary';
import { LinkAddress } from '@constants/constants';
import C from '@styles';

class CalculatorCCPage extends Component {
  render() {
    return (
      <ErrorBoundary>
        <C.pageHeader data-test-id={`${LinkAddress.homecc}-page`}>Calculator CC</C.pageHeader>
        <CalculatorCC />
      </ErrorBoundary>
    );
  }
}

export default CalculatorCCPage;
