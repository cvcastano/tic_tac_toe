import React from "react";
import './App.scss';
import Cell from './Cell';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cells: Array(9).fill(),
    }
  }

  handleClick(i) {
    console.log('Me han clickado', i)
    const cells = this.state.cells.slice();
    cells[i] = 'X';
    this.setState({cells: cells});
  }

  renderCell(i) {
    return (
      <Cell
        onClick={() => this.handleClick(i)}
        value={this.state.cells[i]}
      />
    )
  }

  render() {


    return (
      <div className="App">
        <h1 className="title">tic tac toe</h1>
        <div className="board">
          {this.renderCell(0)}
          {this.renderCell(1)}
          {this.renderCell(2)}
          {this.renderCell(4)}
          {this.renderCell(5)}
          {this.renderCell(6)}
          {this.renderCell(7)}
          {this.renderCell(8)}
          {this.renderCell(9)}
        </div>

      </div>
    )
  };
}

export default App;