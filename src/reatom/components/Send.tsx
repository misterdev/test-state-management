import React from "react";
import { useAction, useAtom } from "@reatom/react";

import { Send as SendComponent } from "../../components";
import { send, todosAtom } from "../state/todosState";

const Send = () => {
  const sendAction = useAction(send);
  const todos = useAtom(todosAtom);
  const {
    list,
    send: { status },
  } = todos;

  return (
    <SendComponent
      disabled={!list.length}
      onSend={sendAction}
      status={status}
    />
  );
};

export default Send;
