import create from "zustand";

import { State } from "../../types";
import { apiSend } from "../../utils/api";

interface Actions {
  add: (todo: string) => void;
  remove: (index: number) => void;
  reset: () => void;
  sendApi: () => Promise<void>;
}

const useStore = create<State & Actions>((set) => ({
  list: [],
  send: {
    status: "DEFAULT",
  },

  add: (todo) => set((state) => ({ list: [...state.list, { text: todo }] })),

  remove: (index) =>
    set((state) => ({
      list: state.list.filter((_, i) => i !== index),
    })),

  reset: () => set({ list: [] }),

  sendApi: async () => {
    set({ send: { status: "LOADING" } })

    try {
    const response = await apiSend();
      set({ send: { status: "SUCCESS" } })
    } catch {
      set({ send: { status: "ERROR" } })
    }
  }
}));

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
