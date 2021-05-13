import React from "react";

const Add = () => {
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
      <button>+</button>
    </div>
  );
};

export default Add;
