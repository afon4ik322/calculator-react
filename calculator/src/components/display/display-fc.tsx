import { FC } from 'react';
import S from './display.styled';

interface DisplayPropsType {
  result: string;
  calculationsInput: string;
}

const DisplayFC: FC<DisplayPropsType> = ({ result, calculationsInput }) => {
  return (
    <S.container>
      <S.calculatorInput type='text' value={calculationsInput} disabled />
      <div>{result}</div>
    </S.container>
  );
};

export default DisplayFC;
