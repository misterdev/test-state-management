import React from "react";
import { useDispatch } from "react-redux";
import { add as addAction } from "../../redux/slices/todos";

const Add = () => {
  const dispatch = useDispatch();

  return (
    <div
      style={{
        alignItems: "center",
        display: "flex",
        justifyContent: "space-between",
        padding: 20,
      }}
    >
      <input style={{ marginRight: 20, width: "100%" }} type="text" />
      <button onClick={() => dispatch(addAction("Test"))}>+</button>
    </div>
  );
};

export default Add;
