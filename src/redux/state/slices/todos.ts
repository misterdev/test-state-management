import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../store";
export interface TodosState {
  list: { text: string }[];
  send: {
    result?: string;
    status: "DEFAULT" | "LOADING" | "SUCCESS" | "ERROR";
  };
}

const initialState: TodosState = {
  list: [],
  send: {
    status: "DEFAULT",
  },
};

const apiSend = () =>
  new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve("Send success!");
      } else {
        reject("Error: Send failed");
      }
    }, 3000);
  });

export const send = createAsyncThunk("todos/send", async () => {
  const response = await apiSend();

  return response;
});

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
  extraReducers: (builder) => {
    builder.addCase(send.fulfilled, (state, action) => {
      state.send.result = action.payload;
      state.send.status = "SUCCESS";
    });
    builder.addCase(send.pending, (state) => {
      state.send.status = "LOADING"
    });
    builder.addCase(send.rejected, (state) => {
      state.send.status = "ERROR";
    });
  },
});

export const getTodos = (state: RootState) => state.todos;
export const getTodosList = (state: RootState) => state.todos.list;
export const getTodosSend = (state: RootState) => state.todos.send;

export const { add, remove, reset } = todosSlice.actions;
export default todosSlice.reducer;
