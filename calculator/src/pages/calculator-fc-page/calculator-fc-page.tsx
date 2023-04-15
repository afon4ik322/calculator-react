import CalculatorFC from '../../components/calculator/calculator-fc';
import ErrorBoundary from '../../components/error-boundary/error-boundary';
import { LinkAddress } from '../../constants/constants';

const CalculatorFCPage = () => {
  return (
    <ErrorBoundary>
      <h2 data-test-id={`${LinkAddress.homefc}-page`}>Calculator FC</h2>
      <CalculatorFC />
    </ErrorBoundary>
  );
};

export default CalculatorFCPage;
