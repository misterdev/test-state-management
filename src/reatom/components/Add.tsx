import React from "react";
import { useAction } from "@reatom/react";

import { Add as AddComponent } from "../../components";

import { add } from "../state/todosState";

const Add = () => {
  const addAction = useAction(add);

  return <AddComponent onAdd={addAction} />;
};

export default Add;
