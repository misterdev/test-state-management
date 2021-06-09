import React from "react";

import { useRecoilState, useRecoilValue } from "recoil";

import { Send as SendComponent } from "../../components";

import { apiSend } from "../../utils/api";
import { listAtom, sendAtom } from "../state/todosState";

const Send = () => {
  const list = useRecoilValue(listAtom);
  const [send, setSend] = useRecoilState(sendAtom);

  const sendAction = async () => {
    setSend((send) => ({
      ...send,
      status: "LOADING",
    }));

    try {
      await apiSend();

      setSend((send) => ({
        ...send,
        status: "SUCCESS",
      }));
    } catch {
      setSend((send) => ({
        ...send,
        status: "ERROR",
      }));
    }
  };

  return (
    <SendComponent
      disabled={!list.length}
      onSend={sendAction}
      status={send.status}
    />
  );
};

export default Send;
