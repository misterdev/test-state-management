import { atom } from "recoil";

import { List, Send, State } from "../../types";

export const todosState = atom<State>({
  key: "todos",
  default: {
    list: [],
    send: {
      status: "DEFAULT",
    },
  },
});

export const listAtom = atom<List>({
  key: "list",
  default: [],
});

export const sendAtom = atom<Send>({
  key: "send",
  default: {
    status: "DEFAULT",
  },
});
