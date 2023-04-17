import { Component } from 'react';

import { LinkAddress } from '@constants/constants';
import CalculatorCC from '@components/calculator/calculator-cc';
import ErrorBoundary from '@components/error-boundary/error-boundary';

class CalculatorCCPage extends Component {
  render() {
    return (
      <ErrorBoundary>
        <h2 data-test-id={`${LinkAddress.homecc}-page`}>Calculator CC</h2>
        <CalculatorCC />
      </ErrorBoundary>
    );
  }
}

export default CalculatorCCPage;
