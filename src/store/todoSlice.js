import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: new Date().getTime(),
        ...action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todos) => todos.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const { id, text, firstName, lastName, mobile } = action.payload;
      const todoUpate = state.todos.find((todo) => todo.id === id);
      if (todoUpate) {
        todoUpate.todo = text;
        todoUpate.firstName = firstName;
        todoUpate.lastName = lastName;
        todoUpate.mobile = mobile;
      }
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
