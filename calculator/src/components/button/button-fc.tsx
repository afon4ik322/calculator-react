import S from './button.styled';

interface CalculatorButtonProps {
  value: string;
}

const CalculatorButtonFC = ({ value }: CalculatorButtonProps) => <S.button>{value}</S.button>;

export default CalculatorButtonFC;
