import {Nought} from "../ui/nought";
import {Cross} from "../ui/cross";
import {Board} from "../ui/board";
import {Space} from "../ui/space";
import {Player} from "../player";
import {Mark} from "../board";
import {Game} from "../game";

let boardView = document.getElementById('game')

let view = function(game: Game): SVGElement {
    let nought = new Nought()
    let cross = new Cross()
    let space = new Space()

    let board = new Board(nought, cross, space)
    let marks: SVGElement[] = new Array(9)

    for(let i = 0; i < 9; i++){
        switch (game.board.get_mark(i)) {
            case Mark.X:
                marks[i] = cross.use({})
                break
            case Mark.O:
                marks[i] = nought.use({})
                break
            default:
                marks[i] = space.use({})
                break
        }
    }
    return board.svg(marks, {})
}


let p1 = new Player(Mark.X);
let p2 = new Player(Mark.O);


let game = new Game(p1, p2);

boardView.appendChild(view(game))

let update = function() {
    let locations = document.getElementsByClassName("mark")
    for (let i = 0; i < 9; i++) {
        let move = function () {
            game.p1_move(i)
            game.p2_move(i)
            let x = view(game)
            document.getElementById("board").remove()
            document.getElementById("game").appendChild(x)
            update()
        }
        locations[i].addEventListener('click', move)
    }
}

update()





