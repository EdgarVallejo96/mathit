import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tictactoe',
  templateUrl: './tictactoe.component.html',
  styleUrls: ['./tictactoe.component.css']
})
export class TictactoeComponent implements OnInit {
  playerTurn = 'O';
  
  checkPlayerTurn() {
    if (this.playerTurn === 'X') {
      this.playerTurn = 'O';
    } else {
      this.playerTurn = 'X';
    }
  }

  checkWinner() {
    let winner = '';
    let c11 = ''+document.getElementById('1')?.innerText;
    let c12 = ''+document.getElementById('2')?.innerText;
    let c13 = ''+document.getElementById('3')?.innerText;
    let c21 = ''+document.getElementById('4')?.innerText;
    let c22 = ''+document.getElementById('5')?.innerText;
    let c23 = ''+document.getElementById('6')?.innerText;
    let c31 = ''+document.getElementById('7')?.innerText;
    let c32 = ''+document.getElementById('8')?.innerText;
    let c33 = ''+document.getElementById('9')?.innerText;

    if (c11 === c12 && c12 === c13 && c11.length === 1) {
      winner = c11;
    } else if (c21 === c22 && c22 === c23 && c21.length === 1) {
      winner = c21;
    } else if (c31 === c32 && c32 === c33 && c31.length === 1) {
      winner = c31;
    } else if (c11 === c21 && c21 === c31 && c11.length === 1) {
      winner = c11;
    } else if (c12 === c22 && c22 === c32 && c12.length === 1) {
      winner = c12;
    } else if (c13 === c23 && c23 === c33 && c13.length === 1) {
      winner = c13;
    } else if (c11 === c22 && c22 === c33 && c11.length === 1) {
      winner = c11;
    } else if (c13 === c22 && c22 === c31 && c13.length === 1) {
      winner = c13;
    }

    if (winner === 'X' || winner === 'O') {
      let timeout = 1;
      setTimeout(() => {
        alert('Player "' + winner + '" wins!');
        location.reload();
      }, timeout);
    }
  }

  setPlayerSymbol(event: any) {
    if (this.playerTurn === 'X') {
      event.target.innerText = 'O';
    } else {
      event.target.innerText = 'X';
    }
    this.checkPlayerTurn();
    event.target.disabled = true;
    event.target.style.backgroundColor = '#F0F0F0';
    event.target.style.color = '#000000';
    this.checkWinner();
  }
  constructor() { }

  ngOnInit(): void {
  }

}
