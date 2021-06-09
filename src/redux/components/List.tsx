import React from "react";

import { List as ListComponent } from "../../components";

import { useAppDispatch, useAppSelector } from "../state/hooks";
import { getTodosList, remove as removeAction } from "../state/slices/todos";

const App = () => {
  const dispatch = useAppDispatch();
  const todos = useAppSelector(getTodosList);

  return (
    <ListComponent
      list={todos}
      onRemove={(index) => dispatch(removeAction(index))}
    />
  );
};

export default App;
