import CalculatorFC from '../../components/calculator/calculator-fc';
import { LinkAddress } from '../../constants/constants';

const CalculatorFCPage = () => {
  return (
    <>
      <h2 data-test-id={`${LinkAddress.homefc}-page`}>Calculator FC</h2>
      <CalculatorFC />
    </>
  );
};

export default CalculatorFCPage;
