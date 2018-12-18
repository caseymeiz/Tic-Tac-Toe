
import { Mark } from "./board"

export class Player {
    mark: Mark;

    constructor(mark: Mark){
        this.mark = mark;
    }

    equals(player: Player): boolean {
        return JSON.stringify(this) == JSON.stringify(player);
    }

}