import React from "react";

const List = () => {
  const todos: { text: string }[] = [{ text: "Ciao" }, { text: "Mario" }];

  return (
    <div>
      {todos.map(({ text }) => (
        <div style={{
          alignItems: "center",
          borderBottom: '1px solid #aaa',
          display: "flex",
          justifyContent: 'space-between',
          padding: 20
        }}>
          <span>{text}</span>
          <button>-</button>
        </div>
      ))}
    </div>
  );
};

export default List;
