import React from 'react';

import Todos from './Todos/Todos'

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Todos with Redux</h1>
      <Todos />
    </div>
  );
}
