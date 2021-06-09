import React from "react";

import useTodos from "../state/useTodos";

import { List as ListComponent } from "../../components";

const List = () => {
  const removeAction = useTodos((state) => state.remove);

  const list = useTodos((state) => state.list);

  return (
    <ListComponent list={list} onRemove={(index) => removeAction(index)} />
  );
};

export default List;
