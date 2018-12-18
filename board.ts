
export enum Mark {X, O, Empty}


export class Board {
    board: Array<Array<Mark>>;
    constructor(){
        this.board = [[],[],[]];
        for(let i = 0; i < 3; i++){
            for(let j = 0; j < 3; j++){
                this.board[i][j] = Mark.Empty;
            }
        }
        console.log(this.board)
    }

    valid_move(index: number): boolean {
        const row = Math.floor(index/3);
        const col = index % 3;
        return this.board[row][col] == Mark.Empty;
    }

    move(index: number, mark: Mark): boolean {
        const row = Math.floor(index/3);
        const col = index % 3;
        if(this.valid_move(index)){
            this.board[row][col] = mark;
            return true
        } else {
            return false
        }
    }

    get_mark(index: number) : Mark {
        const row = Math.floor(index/3);
        const col = index % 3;
        return this.board[row][col];
    }

    rotate(board: Mark[][]) : Array<Array<Mark>> {
        let r_board = [];
        for(let i = 0; i < 3; i++) {
            let row = board.map(e => e[i]).reverse();
            r_board.push(row);
        }
        return r_board;
    }


    check_three_in_a_row(): boolean {
        let success = false;
        let board = this.board;
        for(let i = 0; i < 4; i++){
            success = board[0].every((val, i, arr) => val === Mark.O) || success;
            success = board[0].every((val, i, arr) => val === Mark.X) || success;
            success = [board[0][1], board[1][1], board[2][1]].every((val, i, arr) => val === Mark.O) || success;
            success = [board[0][1], board[1][1], board[2][1]].every((val, i, arr) => val === Mark.X) || success;
            success = [board[0][0], board[1][1], board[2][2]].every((val, i, arr) => val === Mark.O) || success;
            success = [board[0][0], board[1][1], board[2][2]].every((val, i, arr) => val === Mark.X) || success;
            board = this.rotate(board);
        }
        return success;
    }

    has_available_moves(): boolean{
        for(let i = 0; i < 3; i++){
            for(let j = 0; j < 3; j++){
                if(this.board[i][j] === Mark.Empty){
                    return true
                }
            }
        }
        return false
    }



}
