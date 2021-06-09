import React from "react";

import useTodos from "../state/useTodos";

import { Add as AddComponent } from "../../components";

const Add = () => {
  const addAction = useTodos((state) => state.add);

  return <AddComponent onAdd={(todo) => addAction(todo)} />;
};

export default Add;
