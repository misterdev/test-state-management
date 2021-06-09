import React from "react";
import { useAction, useAtom } from '@reatom/react';

import { Add, List, Send } from "../components";
import { add, remove, reset, send, todosAtom } from "./state/todosState";

const App = () => {
  const addAction = useAction(add);
  const removeAction = useAction(remove);
  const resetAction = useAction(reset);
  const sendAction = useAction(send)

  const todos = useAtom(todosAtom);
  const { list, send: {status} } = todos;

  return (
    <div>
      <Send
        disabled={!list.length}
        onSend={sendAction}
        status={status}
      />
      <Add onAdd={addAction} />
      <List list={list} onRemove={removeAction} />
    </div>
  );
};

export default App;
