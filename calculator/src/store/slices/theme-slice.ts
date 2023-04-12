import { createSlice } from '@reduxjs/toolkit';
import { ThemeType, darkTheme, lightTheme } from '../../styles/theme';

interface ThemeState {
  themeName: 'light' | 'dark';
  theme: ThemeType;
}

const initialState: ThemeState = {
  themeName: 'light',
  theme: lightTheme,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    switchTheme(state, action) {
      state.themeName = action.payload;
      state.theme = state.themeName === 'light' ? lightTheme : darkTheme;
    },
  },
});

export const theme = themeSlice.reducer;
export const { switchTheme } = themeSlice.actions;
