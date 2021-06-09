import React from "react";

import { useSetRecoilState } from "recoil";

import { Add as AddComponent } from "../../components";
import { listAtom } from "../state/todosState";

const Add = () => {
  const setList = useSetRecoilState(listAtom);

  const addAction = (todo: string) => {
    setList((list) => [...list, { text: todo }]);
  };

  return <AddComponent onAdd={addAction} />;
};

export default Add;
