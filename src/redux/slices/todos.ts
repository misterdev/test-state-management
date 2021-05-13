import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
      //
    },
    reset(state) {
      state.list = [];
    },
  },
});

export const getTodosList = (state: any) => state.todos.list;

export const { add, remove, reset } = todosSlice.actions;
export default todosSlice.reducer;
