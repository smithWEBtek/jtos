import React from 'react';
import './index.css';
import Square from './Square';
import './index.css';

class Board extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    }
  }

  // handleClick(i) {
  //   const squares = this.state.squares.slice()
  //   const turnCount = squares.filter(sq => sq !== null).length + 1
  //   console.log('turnCount: ', turnCount);

  //   turnCount % 2 !== 0 && squares[i] === null ? squares[i] = "X" : squares[i] = "O"
  //   this.setState({ squares: squares })
  // }

  handleClick(i) {
    const squares = this.state.squares.slice()
    if (squares[i] !== 'X' && squares[i] !== 'O') {
      return this.state.xIsNext ? 'X' : 'O'
    } else {
      console.log('choose an empty square!');
    }

    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    })
  }

  renderSquare(i) {
    return <Square
      value={this.state.squares[i]}
      onClick={() => this.handleClick(i)}
    />;
  }

  render() {
    const status = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`;

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export default Board;
