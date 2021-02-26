import logo from './logo.svg';
import './App.css';
import TodoApp from './component/ToDoAppWithUseInput.js'
import React, { useRef } from "react";

function App() {
  const inputEl = useRef(null);
  const inputEl1 = useRef(null);

  const onButtonClick = () => {
    inputEl.current.focus();
  };

  return (
    <div className="App">
      <h2>Use refs to control focus</h2>
      <input ref={inputEl} />
      <input ref={inputEl1} />

      <button onClick={onButtonClick}>Focus the input</button>
    </div>
  );
} 

export default App;
