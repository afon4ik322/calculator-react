import { Component } from 'react';
import { connect } from 'react-redux';
import { StateType } from '@store';
import { HistoryStateType } from '@store/slices/history-slice';
import { v4 as uuidv4 } from 'uuid';

import S from './history.styled';

interface HistoryPropsType {
  history: HistoryStateType;
}

const mapStateToProps = (state: StateType) => ({
  history: state.history,
});

class HistoryCC extends Component<HistoryPropsType> {
  render() {
    const { history } = this.props.history;

    return (
      <>
        <S.header>History</S.header>
        <S.list data-test-id='history-list'>
          {history.length ? (
            history.map((historyItem: string) => (
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
  }
}

export default connect(mapStateToProps, null)(HistoryCC);
