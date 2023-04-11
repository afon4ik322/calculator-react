import { FC } from 'react';
import { useAppSelector } from '../../store';
import S from './history.styled';

const HistoryFC: FC = () => {
  const { history } = useAppSelector((state) => state.history);

  return (
    <>
      <S.header>History</S.header>
      <S.list>
        {history.length ? history.map((historyItem) => <li>{historyItem}</li>) : <li>History is empty</li>}
      </S.list>
    </>
  );
};

export default HistoryFC;
