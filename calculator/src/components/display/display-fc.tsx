import { FC } from 'react';
import S from './display.styled';

interface DisplayPropsType {
  result: string;
  calculationsInput: string;
  setCalculationsInput: React.Dispatch<React.SetStateAction<string>>;
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
