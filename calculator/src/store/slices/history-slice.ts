import { createSlice } from '@reduxjs/toolkit';

interface HistoryStateType {
  history: string[];
}

const initialState: HistoryStateType = {
  history: [],
};

const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    addHistory: (state, action) => {
      state.history.unshift(action.payload);
    },
    clearHistory: (state) => {
      state.history = [];
    },
  },
});

export const history = historySlice.reducer;
export const { addHistory, clearHistory } = historySlice.actions;
