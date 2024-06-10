// TODO: todoSlice 를 작성하세요.
import { createSlice } from "@reduxjs/toolkit";

let nextTodoold = 1;

export const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const { title, content } = action.payload;
      state.push({ id: nextTodoold++, title, content, isDone: false });
    },

    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    toggleTodo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.isDone = !todo.isDone;
      }
    },
  },
});

export const { addTodo, deleteTodo, toggleTodo } = todoSlice.actions;

export default todoSlice.reducer;
