import { Mark } from "./board"
import {Game} from "./game";


export class UI {
    x = '<svg viewbox="0 0 100 100"><path stroke-linecap="round" d="M 10 10 L 90 90 Z" stroke="currentColor" fill="transparent" stroke-width="10"/><path stroke-linecap="round" d="M 10 90 L 90 10 Z" stroke="currentColor" fill="transparent" stroke-width="10"/></svg>'
    o = '<svg viewbox="0 0 100 100"><circle cx="50" cy="50" r="40" stroke="currentColor" stroke-width="10" fill="none" /></svg>'

    game: Game;
    constructor(game: Game){
        this.game = game;
    }

    update(): void {
        this.update_board_view();
        this.update_player_turn();
    }

    update_board_view() : void{
        let board_dom = document.getElementsByClassName("square")
        for (let i = 0; i < board_dom.length; i++) {

            switch (this.game.board.get_mark(i)) {
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

    update_player_turn() : void {
        let player_id: string;
        if(this.game.active_player.mark == Mark.X){
            player_id = this.x;
        } else {
            player_id = this.o;
        }

        if(this.game.is_game_over()){
            if(this.game.is_tie()){
                document.getElementById("game_status").innerHTML = "Tie Game"
            } else if(this.game.get_winner() === Mark.X) {
                document.getElementById("game_status").innerHTML = "Winner:<div id='player'>"+this.x+"</div>"
            } else {
                document.getElementById("game_status").innerHTML = "Winner:<div id='player'>"+this.o+"</div>"
            }
        } else {
            document.getElementById("game_status").innerHTML = "Turn: <div id='player'>"+player_id+"</div>"
        }
    }
}