import React from "react";

import Add from "./components/Add";
import List from "./components/List";
import Send from "./components/Send";

const App = () => {
  return (
    <div>
      <Send />
      <Add />
      <List />
    </div>
  );
};

export default App;
