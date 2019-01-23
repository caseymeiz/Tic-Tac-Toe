import {Mark} from "./mark";

export class Board {
    namespace = 'http://www.w3.org/2000/svg'
    id = 'board'
    nought: Mark
    cross: Mark
    space: Mark


    constructor(nought: Mark, cross: Mark, space: Mark){
        this.nought = nought
        this.cross = cross
        this.space = space
    }


    svg(state: SVGElement[], attrs: Object): SVGElement {
        let board = <SVGElement> document.createElementNS(this.namespace,'svg')
        let l1 = <SVGPathElement> document.createElementNS(this.namespace, 'path')
        let l2 = <SVGPathElement> document.createElementNS(this.namespace, 'path')
        let l3 = <SVGPathElement> document.createElementNS(this.namespace, 'path')
        let l4 = <SVGPathElement> document.createElementNS(this.namespace, 'path')

        board.setAttribute('viewBox', '0 0 3 3')
        board.setAttribute('id', this.id)

        board.appendChild(l1)
        board.appendChild(l2)
        board.appendChild(l3)
        board.appendChild(l4)

        board.appendChild(this.nought.symbol())
        board.appendChild(this.cross.symbol())
        board.appendChild(this.space.symbol())

        l1.setAttribute('d', 'M 0 1 L 3 1 Z')
        l1.setAttribute('stroke-width', '.05')
        l1.setAttribute('class', 'board')

        l2.setAttribute('d', 'M 0 2 L 3 2 Z')
        l2.setAttribute('stroke-width', '.05')
        l2.setAttribute('class', 'board')

        l3.setAttribute('d', 'M 1 0 L 1 3 Z')
        l3.setAttribute('stroke-width', '.05')
        l3.setAttribute('class', 'board')

        l4.setAttribute('d', 'M 2 0 L 2 3 Z')
        l4.setAttribute('stroke-width', '.05')
        l4.setAttribute('class', 'board')


        for (let attr in attrs) {
            board.setAttribute(attr, attrs[attr])
        }

        for(let i = 0; i < state.length; i++) {
            let row = Math.floor(i/3)
            let col = i % 3
            state[i].setAttribute('x', String(row))
            state[i].setAttribute('y', String(col))
            board.appendChild(state[i])
        }
        return board
    }
}