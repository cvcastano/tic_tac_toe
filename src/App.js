import React from "react";
import './App.scss';
import Cell from './Cell';
class App extends React.Component {

  handleClick() {
    console.log('Me han clickado')
  }

  render() {


    return (
      <div className="App">
        <h1 className="title">tic tac toe</h1>
        <Cell onClick={this.handleClick} />

      </div>
    )
  };
}

export default App;