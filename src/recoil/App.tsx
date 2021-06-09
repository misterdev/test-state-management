import React from "react";

import { useRecoilState } from "recoil";

import { Add, List, Send } from "../components";
import { apiSend } from "../utils/api";
import { todosState } from "./state/todosState";

const App = () => {
  const [todos, setTodos] = useRecoilState(todosState);
  const {
    list,
    send: { status },
  } = todos;

  const addAction = (todo: string) => {
    setTodos((todos) => ({
      ...todos,
      list: [...todos.list, { text: todo }],
    }));
  };

  const removeAction = (index: number) => {
    setTodos((todos) => ({
      ...todos,
      list: todos.list.filter((_, i) => i !== index),
    }));
  };

  const resetAction = (index: number) => {
    setTodos((todos) => ({
      ...todos,
      list: [],
    }));
  };

  const sendAction = async () => {
    setTodos((todos) => ({
      ...todos,
      send: {
        status: "LOADING",
      },
    }));

    try {
      await apiSend();

      setTodos((todos) => ({
        ...todos,
        send: {
          status: "SUCCESS",
        },
      }));
    } catch {
      setTodos((todos) => ({
        ...todos,
        send: {
          status: "ERROR",
        },
      }));
    }
  };

  return (
    <div>
      <Send
        disabled={!list.length}
        onSend={() => sendAction()}
        status={status}
      />
      <Add onAdd={addAction} />
      <List list={list} onRemove={removeAction} />
    </div>
  );
};

export default App;
