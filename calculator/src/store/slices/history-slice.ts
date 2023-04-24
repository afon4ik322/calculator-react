import { createSlice } from '@reduxjs/toolkit';

export interface HistoryStateType {
  history: string[];
}

const initialState: HistoryStateType = {
  history: [],
};

const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    addHistory: (state, { payload }: { type: string; payload: string }) => {
      state.history.unshift(payload);
    },
    clearHistory: (state) => {
      state.history = [];
    },
  },
});

export const history = historySlice.reducer;
export const { addHistory, clearHistory } = historySlice.actions;
