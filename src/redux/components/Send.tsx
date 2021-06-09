import React from "react";

import { Send as SendComponent } from "../../components";

import { useAppDispatch, useAppSelector } from "../state/hooks";
import {
  getTodosList,
  getTodosSend,
  send as sendAction,
} from "../state/slices/todos";

const Send = () => {
  const dispatch = useAppDispatch();
  const { status } = useAppSelector(getTodosSend);
  const todos = useAppSelector(getTodosList);

  return (
    <SendComponent
      disabled={!todos.length}
      onSend={() => dispatch(sendAction())}
      status={status}
    />
  );
};

export default Send;
