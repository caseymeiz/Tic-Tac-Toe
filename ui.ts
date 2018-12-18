import { Board, Mark } from "./board"

export class UI {
    x = '<svg viewbox="0 0 100 100"><path stroke-linecap="round" d="M 10 10 L 90 90 Z" stroke="currentColor" fill="transparent" stroke-width="10"/><path stroke-linecap="round" d="M 10 90 L 90 10 Z" stroke="currentColor" fill="transparent" stroke-width="10"/></svg>'
    o = '<svg viewbox="0 0 100 100"><circle cx="50" cy="50" r="40" stroke="currentColor" stroke-width="10" fill="none" /></svg>'

    constructor(){

    }

    update(board: Mark[]): void {
        let board_dom = document.getElementsByClassName("square")
        for (let i = 0; i < board_dom.length; i++) {

            switch (board[i]) {
                case Mark.X:
                    board_dom[i].innerHTML = this.x;
                    break;
                case Mark.O:
                    board_dom[i].innerHTML = this.o;
                    break;
                default:
                    board_dom[i].innerHTML = "";
            }
        }
    }
}