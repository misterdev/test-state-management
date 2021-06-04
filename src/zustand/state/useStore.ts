import create from "zustand";
import { devtools } from "zustand/middleware";

import { State } from "../../types";
import { apiSend } from "../../utils/api";

interface Actions {
  add: (todo: string) => void;
  remove: (index: number) => void;
  reset: () => void;
  sendApi: () => Promise<void>;
}

const useStore = create<State & Actions>(devtools((set) => ({
  list: [],
  send: {
    status: "DEFAULT",
  },

  add: (todo) => set((state) => ({ list: [...state.list, { text: todo }] }), false, 'add'),

  remove: (index) =>
    set((state) => ({
      list: state.list.filter((_, i) => i !== index),
    }), false, 'remove'),

  reset: () => set({ list: [] }, false, 'reset'),

  sendApi: async () => {
    set({ send: { status: "LOADING" } }, false, "sendApi > pending");

    try {
      await apiSend();
      // https://github.com/pmndrs/zustand/pull/167
      set({ send: { status: "SUCCESS" } }, false, "sendApi > fulfilled");
    } catch {
      set({ send: { status: "ERROR" } }, false, "sendApi > reject");
    }
  },
}), "tools"));


/* Test with `import { combine } from "zustand/middleware";` */
// const useStore = create(
//   combine(
//     {
//       list: [],
//       send: {
//         status: "DEFAULT",
//       },
//     } as State,
//     (set) => ({
//       add: (todo: string) =>
//         set((state) => ({ list: [...state.list, { text: todo }] })),

//       remove: (index: number) =>
//         set((state) => ({
//           list: state.list.filter((_, i) => i !== index),
//         })),

//       reset: () => set({ list: [] }),
//     })
//   )
// );

export default useStore;
