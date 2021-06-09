import React from "react";
import { useAction, useAtom } from "@reatom/react";

import { remove, todosAtom } from "../state/todosState";
import { List as ListComponent } from "../../components";

const List = () => {
  const todos = useAtom(todosAtom);
  const { list } = todos;
  const removeAction = useAction(remove);

  return <ListComponent list={list} onRemove={removeAction} />;
};

export default List;
