import { Component } from 'react';
import CalculatorCC from '../../components/calculator/calculator-cc';
import { LinkAddress } from '../../constants/constants';

class CalculatorCCPage extends Component {
  render() {
    return (
      <>
        <h2 data-test-id={`${LinkAddress.homecc}-page`}>Calculator CC</h2>
        <CalculatorCC />
      </>
    );
  }
}

export default CalculatorCCPage;
