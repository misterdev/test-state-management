import React from "react";

const List = ({ todos }: Props) => {
  const todos = [];
  
  return (
    <div>
      {todos?.map(({ text }) => (
        <div>{text}</div>
      ))}
    </div>
  );
};

interface Props {
  todos?: { text: string }[];
}

export default List;
