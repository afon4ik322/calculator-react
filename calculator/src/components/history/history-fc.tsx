import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useAppSelector } from '../../store';
import S from './history.styled';

const HistoryFC: FC = () => {
  const { history } = useAppSelector((state) => state.history);

  return (
    <>
      <S.header>History</S.header>
      <S.list data-test-id='history-list'>
        {history.length ? (
          history.map((historyItem) => (
            <li key={uuidv4()} data-test-id='history-item'>
              {historyItem}
            </li>
          ))
        ) : (
          <li>History is empty</li>
        )}
      </S.list>
    </>
  );
};

export default HistoryFC;
