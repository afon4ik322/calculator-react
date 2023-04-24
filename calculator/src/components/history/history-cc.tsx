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

class HistoryCC extends Component<HistoryPropsType, { isShowHistory: boolean }> {
  constructor(props: HistoryPropsType) {
    super(props);
    this.state = {
      isShowHistory: false,
    };
  }
  render() {
    const { history } = this.props.history;
    const { isShowHistory } = this.state;

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
          <S.button
            type='button'
            onClick={() => this.setState((prev) => ({ isShowHistory: !prev.isShowHistory }))}
            disabled={history.length < 16}
          >
            {isShowHistory ? 'Show 15 last operations' : 'Show all operations'}
          </S.button>
        </S.headerContainer>

        <S.list data-test-id='history-list'>
          {history.length ? historyItems(isShowHistory ? history : history.slice(0, 15)) : <li>History is empty</li>}
        </S.list>
      </>
    );
  }
}

export default connect(mapStateToProps, null)(HistoryCC);
