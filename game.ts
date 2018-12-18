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
        if(this.is_game_over()){
            return false;
        }

        let is_successful: boolean;
        if(this.is_their_turn(player) && this.board.move(index, player.mark)){
            is_successful = true;
            this.active_player = this.active_player.equals(this.p1) ? this.p2 : this.p1;
        } else {
            is_successful = false;
        }

        return is_successful;
    }

    is_game_over(): boolean {
        return this.board.check_three_in_a_row() || !this.board.has_available_moves()
    }

    is_tie(): boolean {
        return !this.board.check_three_in_a_row() && !this.board.has_available_moves()
    }

    is_their_turn(player: Player) {
        return this.active_player.equals(player);
    }

    // if the game is not over the function is undefined
    get_winner(){
        return this.active_player.equals(this.p1) ? this.p2.mark : this.p1.mark;
    }

    p1_move(index: number): boolean {
        return this.move(index, this.p1);
    }
    p2_move(index: number): boolean {
        return this.move(index, this.p2);
    }
}