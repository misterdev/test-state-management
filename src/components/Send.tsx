import React from "react";

const Send = ({ disabled, onSend, status }: Props) => {
  return (
    <div
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.10)",
        display: "flex",
        justifyContent: "space-between",
        padding: 20,
      }}
    >
      <button onClick={onSend} disabled={disabled}>
        Send
      </button>
      <div>{`Sending status: ${status}`}</div>
    </div>
  );
};

interface Props {
  disabled: boolean;
  onSend: () => void;
  status: string;
}

export default Send;
