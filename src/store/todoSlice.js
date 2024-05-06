import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: JSON.parse(localStorage.getItem("todos")) || [],
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

      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    removeTodo: (state, action) => {
      const todos = JSON.parse(localStorage.getItem("todos"));
      state.todos = todos.filter((todos) => todos.id !== action.payload);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },

    updateTodo: (state, action) => {
      const todoList = window.localStorage.getItem("todos");
      if (todoList) {
        const todoListArr = JSON.parse(todoList);
        todoListArr.forEach((todos) => {
          if (todos.id === action.payload.id) {
            todos.firstName = action.payload.firstName;
            todos.lastName = action.payload.lastName;
            todos.mobile = action.payload.mobile;
            todos.todo = action.payload.todo;
          }
        });
        window.localStorage.setItem("todos", JSON.stringify(todoListArr));
        state.todoList = [...todoListArr];
      }
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
