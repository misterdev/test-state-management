import React from "react";
import { useState } from "react";

const Add = ({ onAdd }: Props) => {
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
        disabled={!todo.length}
        onClick={() => {
          onAdd(todo);
          setTodo("");
        }}
      >
        +
      </button>
    </div>
  );
};

interface Props {
  onAdd: (todo: string) => void;
}

export default Add;
