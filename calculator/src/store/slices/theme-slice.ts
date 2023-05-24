import { createSlice } from '@reduxjs/toolkit';
import { darkTheme, lightTheme, ThemeNameType, ThemeType } from '@styles/theme';

export interface ThemeStateType {
  themeName: ThemeNameType;
  theme: ThemeType;
}

const themeNames: ThemeNameType[] = ['dark', 'light'];

const getInitialState = (): ThemeStateType => {
  let themeName = localStorage.getItem('themeName') as ThemeNameType;

  if (!themeNames.includes(themeName)) {
    themeName = 'light';
  }
  const theme = themeName === 'dark' ? darkTheme : lightTheme;

  return {
    themeName,
    theme,
  };
};

const themeSlice = createSlice({
  name: 'theme',
  initialState: getInitialState(),
  reducers: {
    switchTheme(state, action) {
      state.themeName = action.payload;
      state.theme = state.themeName === 'light' ? lightTheme : darkTheme;
      localStorage.setItem('themeName', state.themeName);
    },
  },
});

export const theme = themeSlice.reducer;
export const { switchTheme } = themeSlice.actions;
