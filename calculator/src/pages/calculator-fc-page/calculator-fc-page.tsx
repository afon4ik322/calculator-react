import { FC } from 'react';

import { LinkAddress } from '@constants/constants';
import CalculatorFC from '@components/calculator/calculator-fc';
import ErrorBoundary from '@components/error-boundary/error-boundary';

const CalculatorFCPage: FC = () => {
  return (
    <ErrorBoundary>
      <h2 data-test-id={`${LinkAddress.homefc}-page`}>Calculator FC</h2>
      <CalculatorFC />
    </ErrorBoundary>
  );
};

export default CalculatorFCPage;
