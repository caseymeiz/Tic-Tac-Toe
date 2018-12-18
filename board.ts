
export enum Mark {X, O, Empty}


export class Board {
    board: Array<Mark>;
    constructor(){
        this.board = new Array<Mark>(9);
        for(let i = 0; i < this.board.length; i++){
            this.board[i] = Mark.Empty;
        }
    }

    valid_move(index: number): boolean {
        return this.board[index] == Mark.Empty;
    }

    move(index: number, mark: Mark): boolean {
        if(this.valid_move(index)){
            this.board[index] = mark;
            return true
        } else {
            return false
        }
    }
}
