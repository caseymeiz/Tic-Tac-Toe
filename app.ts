import { Game } from "./game";
import { Mark } from "./board";
import { Player } from "./player";
import { UI } from "./ui";



function init(){
    let p1 = new Player(Mark.X);
    let p2 = new Player(Mark.O);


    let game = new Game(p1, p2);


    let ui = new UI(game);



    for(let i = 0; i < 9; i++){
        let move = function(){
            game.p1_move(i);
            game.p2_move(i);
            ui.update();
        };
        document.getElementsByClassName("square")[i].addEventListener("click", move);
    }

    ui.update();
}
init()

document.getElementById("reset").addEventListener("click", ()=>{
    init()
});





