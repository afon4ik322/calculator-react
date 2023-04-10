import DisplayFC from '../display/display-fc';
import HistoryFC from '../history/history-fc';
import KeypadFC from '../keypad/keypad-fc';
import S from './calculator.styled';

const CalculatorFC = () => (
  <S.container>
    <S.leftContainer>
      <DisplayFC />
      <KeypadFC />
    </S.leftContainer>
    <S.rightContainer>
      <HistoryFC />
    </S.rightContainer>
  </S.container>
);

export default CalculatorFC;
