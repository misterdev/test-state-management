import React from "react";

import useStore from "./state/useStore";

import { Add, List, Send } from "../components";

const App = () => {
  // const add = useStore(state => state.add);
  // const remove = useStore(state => state.remove);
  // const reset = useStore(state => state.reset);
  const [addAction, removeAction, sendAction] = useStore((state) => [
    state.add,
    state.remove,
    state.sendApi,
  ]);

  // const status = useStore(state => state.send.status);
  // const todos = useStore(state => state.list);
  const { status, todos } = useStore(({ send: { status }, list }) => ({
    status,
    todos: list,
  }));

  return (
    <div>
      <Send
        disabled={!todos.length}
        onSend={() => sendAction()}
        status={status}
      />
      <Add onAdd={(todo) => addAction(todo)} />
      <List list={todos} onRemove={(index) => removeAction(index)} />
    </div>
  );
};

export default App;
