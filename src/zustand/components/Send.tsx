import React from "react";

import useTodos from "../state/useTodos";

import { Send as SendComponent } from "../../components";

const Send = () => {
  const sendAction = useTodos((state) => state.sendApi);

  const { status, todos } = useTodos(({ send: { status }, list }) => ({
    status,
    todos: list,
  }));

  return (
    <SendComponent
      disabled={!todos.length}
      onSend={() => sendAction()}
      status={status}
    />
  );
};

export default Send;
