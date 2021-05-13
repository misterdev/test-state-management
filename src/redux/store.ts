import { configureStore } from "@reduxjs/toolkit";
import {default as todos} from "./slices/todos";

export const store = configureStore({
  reducer: {
    todos,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
