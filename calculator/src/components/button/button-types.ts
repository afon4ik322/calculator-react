export interface CalculatorButtonProps {
  value: string;
  type: string;
  keypadHandler: (value: string, type: string) => void;
}
