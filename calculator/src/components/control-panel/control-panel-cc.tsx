import { Component } from 'react';
import { connect } from 'react-redux';
import { StateType } from '@store';
import { clearHistory } from '@store/slices/history-slice';
import { switchTheme, ThemeStateType } from '@store/slices/theme-slice';

import S from './control-panel.styled';

interface ControlPanelPropsType {
  clearHistory: () => void;
  switchTheme: (str: string) => void;
  theme: ThemeStateType;
}

const mapStateToProps = (state: StateType) => ({
  theme: state.theme,
});

const mapDispatchToProps = {
  clearHistory,
  switchTheme,
};

class ControlPanelCC extends Component<ControlPanelPropsType> {
  render() {
    const { themeName } = this.props.theme;
    const { clearHistory, switchTheme } = this.props;

    return (
      <S.container>
        <S.label htmlFor='theme-select'>Choose a theme:</S.label>
        <S.select name='' id='theme-select' value={themeName} onChange={(e) => switchTheme(e.target.value)}>
          <S.option value='light'>Light</S.option>
          <S.option value='dark'>Dark</S.option>
        </S.select>
        <S.button onClick={() => clearHistory()}>Clear All History</S.button>
      </S.container>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ControlPanelCC);
