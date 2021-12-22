import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit {
  squares: (null | 'X' | 'O')[] = Array<null | 'X' | 'O'>(9).fill(null);
  winner: string | null = null;
  currPlayer: 'X' | 'O' = 'X';

  ngOnInit(): void {
    this.newGame();
  }

  newGame(): void {
    this.squares = Array(9).fill(null);
    this.winner = null;
    this.currPlayer = 'X';
  }

  squareClicked(ind: number): void {
    if (!this.squares[ind]) {
      this.squares[ind] = this.currPlayer;
      const winner = this.checkWinner();

      if (winner) {
        alert('Winner is ' + winner);
        this.newGame();
      }

      this.currPlayer = this.currPlayer === 'X' ? 'O' : 'X';
    }
  }

  checkWinner(): null | string {
    // check tic tac toe winner
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
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        return this.squares[a];
      }
    }
    return null;
  }
}
