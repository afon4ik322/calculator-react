import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useAppSelector } from '../../store';
import S from './history.styled';

const HistoryFC: FC = () => {
  const { history } = useAppSelector((state) => state.history);

  return (
    <>
      <S.header>History</S.header>
      <S.list>
        {history.length ? (
          history.map((historyItem) => <li key={uuidv4()}>{historyItem}</li>)
        ) : (
          <li>History is empty</li>
        )}
      </S.list>
    </>
  );
};

export default HistoryFC;
