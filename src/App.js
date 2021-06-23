import React from "react";
import './App.scss';
import Cell from './Cell';
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1 className="title">tic tac toe</h1>
        <Cell />

      </div>
    )
  };
}

export default App;