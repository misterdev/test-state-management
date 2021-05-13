import React from "react";
import { useSelector } from "react-redux";

import { getTodosList } from "../../redux/slices/todos";

const List = () => {
  const todos = useSelector(getTodosList);

  return (
    <div>
      {todos.map(({ text }: any, index: number) => (
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
          <button>-</button>
        </div>
      ))}
    </div>
  );
};

export default List;
