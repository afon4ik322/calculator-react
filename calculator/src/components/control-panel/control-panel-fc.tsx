import { useAppDispatch, useAppSelector } from '@store';
import { clearHistory } from '@store/slices/history-slice';
import { switchTheme } from '@store/slices/theme-slice';
import S from './control-panel.styled';

const ControlPanelFC = () => {
  const dispatch = useAppDispatch();
  const themeName = useAppSelector((state) => state.theme.themeName);

  return (
    <S.container>
      <label htmlFor='theme-select'>Choose a theme:</label>
      <S.select name='' id='theme-select' value={themeName} onChange={(e) => dispatch(switchTheme(e.target.value))}>
        <option value={'light'}>Light</option>
        <option value={'dark'}>Dark</option>
      </S.select>
      <S.button onClick={() => dispatch(clearHistory())}>Clear All History</S.button>
    </S.container>
  );
};

export default ControlPanelFC;
