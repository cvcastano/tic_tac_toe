import React from "react";
import './App.scss';
import Cell from './Cell';
import getWinner from "./getWinner";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cells: Array(9).fill(null),
      xTurn: true,
    };
    this.handleReset = this.handleReset.bind(this);
  }

  handleClick(i) {
    const cells = this.state.cells.slice();
    if (getWinner(cells) || cells[i]) return;
    cells[i] = this.state.xTurn ? '🌴' : '🌊';
    this.setState({
      cells: cells,
      xTurn: !this.state.xTurn,
    });
  }

  renderCell(i) {
    return (
      <Cell
        onClick={() => this.handleClick(i)}
        value={this.state.cells[i]}
      />
    )
  }

  handleReset() {
    this.setState({
      cells: Array(9).fill(),
      xTurn: true,
    });
  }

  render() {
    const winner = getWinner(this.state.cells);
    const player = this.state.xTurn ? '🌴' : '🌊';

    return (
      <div className="App">
        <h1 className="title">tic tac toe</h1>
        <button className="reset" onClick={this.handleReset}>Reset</button>
        <h3 className="info">{winner ? `${winner} wins!` : `Its ${player}'s turn`}</h3>
        <div className="board">
          {this.renderCell(0)}
          {this.renderCell(1)}
          {this.renderCell(2)}
          {this.renderCell(3)}
          {this.renderCell(4)}
          {this.renderCell(5)}
          {this.renderCell(6)}
          {this.renderCell(7)}
          {this.renderCell(8)}
        </div>
      </div>
    )
  };
}

export default App;