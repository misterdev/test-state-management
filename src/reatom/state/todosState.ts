import { declareAction, declareAtom } from "@reatom/core";

import { State, Status } from "../../types";
import { apiSend } from "../../utils/api";

export const add = declareAction<string>("add");
export const remove = declareAction<number>("remove");
export const reset = declareAction<void>("reset");

const setStatus = declareAction<Status>("setStatus");
export const send = declareAction<void>(
  "send",
  async (payload, { dispatch }) => {
    dispatch(setStatus("LOADING"));

    try {
      await apiSend();
      dispatch(setStatus("SUCCESS"));
    } catch {
      dispatch(setStatus("ERROR"));
    }
  }
);

export const todosAtom = declareAtom<State>(
  {
    list: [],
    send: {
      status: "DEFAULT",
    },
  },
  (on) => [
    on(add, (state, payload) => ({
      ...state,
      list: [...state.list, { text: payload }],
    })),
    on(remove, (state, payload) => ({
      ...state,
      list: state.list.filter((_, i) => i !== payload),
    })),
    on(reset, (state) => ({ ...state, list: [] })),
    on(setStatus, (state, payload) => ({
      ...state,
      send: { status: payload },
    })),
  ]
);
