import React from "react";
import { Provider } from "react-redux";

import { store } from "./state/store";

import App from "./App";

export default function ReduxApp() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
