import { Board } from "./board"
import { Player } from "./player"

export class Game {
    board: Board;
    p1: Player;
    p2: Player;
    active_player: Player;

    constructor(p1: Player, p2: Player){
        this.board = new Board();
        this.p1 = p1;
        this.p2 = p2;
        this.active_player = this.p1;
    }

    move(index:number, player: Player): boolean {
        let is_successful: boolean;
        if(this.is_their_turn(player) && this.board.move(index, player.mark)){
            is_successful = true;
            this.active_player = this.active_player.equals(this.p1) ? this.p2 : this.p1;
        } else {
            is_successful = false;
        }
        return is_successful;
    }

    is_their_turn(player: Player) {
        return this.active_player.equals(player);
    }

    p1_move(index: number): boolean {
        return this.move(index, this.p1);
    }
    p2_move(index: number): boolean {
        return this.move(index, this.p2);
    }
}