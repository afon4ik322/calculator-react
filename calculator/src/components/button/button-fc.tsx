import S from './button.styled';

interface CalculatorButtonProps {
  value: string;
  type: string;
  keypadHandler: (value: string, type: string) => void;
}

const CalculatorButtonFC = ({ value, type, keypadHandler }: CalculatorButtonProps) => (
  <S.button onClick={() => keypadHandler(value, type)}>{value}</S.button>
);

export default CalculatorButtonFC;
