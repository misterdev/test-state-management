import React from "react";

import { useRecoilState } from "recoil";

import { List as ListComponent } from "../../components";
import { listAtom } from "../state/todosState";

const List = () => {
  const [list, setList] = useRecoilState(listAtom);

  const removeAction = (index: number) => {
    setList((list) => list.filter((_, i) => i !== index));
  };

  return <ListComponent list={list} onRemove={removeAction} />;
};

export default List;
