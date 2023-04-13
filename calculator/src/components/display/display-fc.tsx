import { FC } from 'react';
import S from './display.styled';

export interface DisplayPropsType {
  result: string;
  calculationsInput: string;
  setCalculationsInput: (str: string) => void;
}

const DisplayFC: FC<DisplayPropsType> = ({ result, calculationsInput, setCalculationsInput }) => {
  return (
    <S.container>
      <S.calculatorInput type='text' value={calculationsInput} onChange={(e) => setCalculationsInput(e.target.value)} />
      <div>{result}</div>
    </S.container>
  );
};

export default DisplayFC;
