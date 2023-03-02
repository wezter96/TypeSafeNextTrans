import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { AppState } from '../index';

interface counterSliceInitialState {
  value: number,
}

const initialState: counterSliceInitialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state: counterSliceInitialState, { payload = 1 }: PayloadAction<number>): void {
      state.value += payload;
    },
    decrement(state: counterSliceInitialState, { payload = 1 }: PayloadAction<number>): void {
      state.value -= payload;
    }
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
