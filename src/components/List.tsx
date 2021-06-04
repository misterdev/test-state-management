import React from "react";

const List = ({ list, onRemove }: Props) => {
  return (
    <div>
      {list.map(({ text }, index: number) => (
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
          <button onClick={() => onRemove(index)}>-</button>
        </div>
      ))}
    </div>
  );
};

interface Props {
  list: { text: string }[];
  onRemove: (index: number) => void;
}

export default List;
