import React from 'react';

import Add from './Add/Add'
import List from './List/List'

const Todos = () => {
  return (
    <div style={{ margin: "auto", maxWidth: 600 }}>
      <Add />
      <List />
    </div>
  );
}

export default Todos;