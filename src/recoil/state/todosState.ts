import { atom, selector } from 'recoil';

import { State } from "../../types";

export const todosState = atom<State>({
  key: "todos",
  default: {
    list: [],
    send: {
      status: "DEFAULT",
    },
  },
})
