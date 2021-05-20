import React from "react";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getTodosList, remove as removeAction } from "../../redux/slices/todos";

const List = () => {
  const dispatch = useAppDispatch();
  const todos = useAppSelector(getTodosList);

  return (
    <div>
      {todos.map(({ text }, index: number) => (
        <div
          key={index}
          style={{
            alignItems: "center",
            borderBottom: "1px solid #aaa",
            display: "flex",
            justifyContent: "space-between",
            padding: 20,
          }}
        >
          <span>{text}</span>
          <button onClick={() => dispatch(removeAction(index))}>-</button>
        </div>
      ))}
    </div>
  );
};

export default List;
