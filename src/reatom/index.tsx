import React, { useEffect } from "react";
import { createStore } from '@reatom/core'
import { context } from '@reatom/react'
import { connectReduxDevtools } from '@reatom/debug';

import App from "./App";

export default function ReduxApp() {
  const store = createStore()

  useEffect(() => connectReduxDevtools(store), []);

  return (
    <context.Provider value={store}>
      <App />
    </context.Provider>
  );
};
