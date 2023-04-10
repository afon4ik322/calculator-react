import { FC } from 'react';
import S from './display.styled';

const DisplayFC: FC = () => (
  <S.container>
    <S.calculatorInput type='number' defaultValue={0} />
    <div>0</div>
  </S.container>
);

export default DisplayFC;
