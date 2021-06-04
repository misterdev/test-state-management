import React from "react";

import { Add, List, Send } from "../components";

import { useAppDispatch, useAppSelector } from "./state/hooks";
import {
  getTodosList,
  getTodosSend,
  add as addAction,
  remove as removeAction,
  send as sendAction,
} from "./state/slices/todos";

const App = () => {
  const dispatch = useAppDispatch();

  const { status } = useAppSelector(getTodosSend);
  const todos = useAppSelector(getTodosList);

  return (
    <div>
      <Send
        disabled={!todos.length}
        onSend={() => dispatch(sendAction())}
        status={status}
      />
      <Add onAdd={(todo) => dispatch(addAction(todo))} />
      <List list={todos} onRemove={(index) => dispatch(removeAction(index))} />
    </div>
  );
};

export default App;
