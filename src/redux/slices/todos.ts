import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../store";
interface TodosState {
  list: { text: string }[];
}

const initialState: TodosState = { list: [] };

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    add(state, action: PayloadAction<string>) {
      state.list.push({ text: action.payload });
    },
    remove(state, action: PayloadAction<number>) {
      state.list.splice(action.payload, 1);
    },
    reset(state) {
      state.list = [];
    },
  },
});

export const getTodos = (state: RootState) => state.todos;
export const getTodosList = (state: RootState) => state.todos.list;

export const { add, remove, reset } = todosSlice.actions;
export default todosSlice.reducer;
