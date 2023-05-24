import { FC } from 'react';
import CalculatorFC from '@components/calculator/calculator-fc';
import ErrorBoundary from '@components/error-boundary/error-boundary';
import { LinkAddress } from '@constants/constants';
import C from '@styles';

const CalculatorFCPage: FC = () => (
  <ErrorBoundary>
    <C.pageHeader data-test-id={`${LinkAddress.homefc}-page`}>Calculator FC</C.pageHeader>
    <CalculatorFC />
  </ErrorBoundary>
);

export default CalculatorFCPage;
