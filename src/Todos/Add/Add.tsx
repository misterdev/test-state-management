import React, { useState } from "react";

import { useAppDispatch } from "../../redux/hooks";
import { add as addAction } from "../../redux/slices/todos";

const Add = () => {
  const dispatch = useAppDispatch();
  const [todo, setTodo] = useState("");

  return (
    <div
      style={{
        alignItems: "center",
        display: "flex",
        justifyContent: "space-between",
        padding: 20,
      }}
    >
      <input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        style={{ marginRight: 20, width: "100%" }}
        type="text"
      />
      <button
        onClick={() => {
          dispatch(addAction(todo));
          setTodo("");
        }}
      >
        +
      </button>
    </div>
  );
};

export default Add;
