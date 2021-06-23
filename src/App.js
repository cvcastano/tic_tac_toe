import React from "react";
import './App.scss';
import Cell from './Cell';
class App extends React.Component {

  handleClick() {
    console.log('Me han clickado')
  }

  renderCell() {
    return (
      <Cell onClick={this.handleClick} />
    )
  }

  render() {


    return (
      <div className="App">
        <h1 className="title">tic tac toe</h1>
        <div className="board">
          {this.renderCell()}
          {this.renderCell()}
          {this.renderCell()}
          {this.renderCell()}
          {this.renderCell()}
          {this.renderCell()}
          {this.renderCell()}
          {this.renderCell()}
          {this.renderCell()}
        </div>

      </div>
    )
  };
}

export default App;