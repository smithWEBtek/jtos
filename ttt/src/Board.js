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
      winner: null,
    }
  }

  handleClick(i) {
    const squares = this.state.squares.slice()
    if (squares[i] !== 'X' && squares[i] !== 'O') {
      squares[i] = this.state.xIsNext ? 'X' : 'O'
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

  storeGame(squares) {
    this.setState({
      games: this.state.squares,
    })
  }

  calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }


  render() {
    const winner = this.calculateWinner(this.state.squares)
    const status = !winner ? `Next player: ${this.state.xIsNext ? 'X' : 'O'}` : `The winner is: ${winner}!`;

    return (
      <div>
        <div className="status">{status}</div>
        <div className="squares-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="squares-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="squares-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export default Board;
