import React from "react";
import { Add as AddComponent } from "../../components";

import { useAppDispatch } from "../state/hooks";
import { add as addAction } from "../state/slices/todos";

const Add = () => {
  const dispatch = useAppDispatch();

  return <AddComponent onAdd={(todo) => dispatch(addAction(todo))} />;
};

export default Add;
