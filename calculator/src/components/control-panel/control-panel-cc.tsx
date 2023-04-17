import { Component } from 'react';
import { connect } from 'react-redux';

import { StateType } from '@store';
import { clearHistory } from '@store/slices/history-slice';
import { ThemeStateType, switchTheme } from '@store/slices/theme-slice';

import S from './control-panel.styled';

interface ControlPanelPropsType {
  clearHistory: () => void;
  switchTheme: (str: string) => void;
  theme: ThemeStateType;
}

const mapStateToProps = (state: StateType) => {
  return {
    theme: state.theme,
  };
};

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
        <label htmlFor='theme-select'>Choose a theme:</label>
        <S.select name='' id='theme-select' value={themeName} onChange={(e) => switchTheme(e.target.value)}>
          <option value={'light'}>Light</option>
          <option value={'dark'}>Dark</option>
        </S.select>
        <S.button onClick={() => clearHistory()}>Clear All History</S.button>
      </S.container>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ControlPanelCC);
