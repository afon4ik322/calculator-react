import { FC, useState } from 'react';
import { useAppSelector } from '@store';
import { v4 as uuidv4 } from 'uuid';

import S from './history.styled';

const HistoryFC: FC = () => {
  const { history } = useAppSelector((state) => state.history);
  const [isShowHistory, setIsShowHistory] = useState(false);

  const historyItems = (array: string[]) =>
    array.map((historyItem) => (
      <li key={uuidv4()} data-test-id='history-item'>
        {historyItem}
      </li>
    ));

  return (
    <>
      <S.headerContainer>
        <S.header>History</S.header>
        <S.button type='button' onClick={() => setIsShowHistory((prev) => !prev)} disabled={history.length < 16}>
          {isShowHistory ? 'Show 15 last operations' : 'Show all operations'}
        </S.button>
      </S.headerContainer>

      <S.list data-test-id='history-list'>
        {history.length ? historyItems(isShowHistory ? history : history.slice(0, 15)) : <li>History is empty</li>}
      </S.list>
    </>
  );
};

export default HistoryFC;
