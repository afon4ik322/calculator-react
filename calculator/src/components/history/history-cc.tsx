import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import S from './history.styled';
import { connect } from 'react-redux';
import { HistoryStateType } from '../../store/slices/history-slice';
import { StateType } from '../../store';

interface HistoryPropsType {
  history: HistoryStateType;
}

const mapStateToProps = (state: StateType) => {
  return {
    history: state.history,
  };
};

class HistoryCC extends Component<HistoryPropsType> {
  render() {
    const { history } = this.props.history;

    return (
      <>
        <S.header>History</S.header>
        <S.list>
          {history.length ? (
            history.map((historyItem: string) => <li key={uuidv4()}>{historyItem}</li>)
          ) : (
            <li>History is empty</li>
          )}
        </S.list>
      </>
    );
  }
}

export default connect(mapStateToProps, null)(HistoryCC);
