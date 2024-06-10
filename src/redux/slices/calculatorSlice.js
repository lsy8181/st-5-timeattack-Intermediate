// TODO: result 상태와 덧셈, 뺄셈에 대한 상태변경 로직을 담은 slice를 만들어 보세요.

import { createSlice } from "@reduxjs/toolkit";

export const calculatorSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    add: (state, action) => {
      state.result += action.payload;
    },
    sub: (state, action) => {
      state.result -= action.payload;
    },
  },
});

export const { add, sub } = calculatorSlice.actions;

export default calculatorSlice.reducer;
