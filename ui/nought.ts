import {Mark} from "./mark";


export class Nought extends Mark {
    id = 'o'
    symbol(): SVGSymbolElement {
        let nought = <SVGSymbolElement> document.createElementNS(this.namespace, 'symbol')
        let c = <SVGCircleElement> document.createElementNS(this.namespace, 'circle')
        nought.setAttribute('viewBox', '0 0 10 10')
        nought.setAttribute('id', this.id)
        nought.appendChild(c)
        c.setAttribute('cx','5')
        c.setAttribute('cy','5')
        c.setAttribute('r','4')
        c.setAttribute('stroke-width','1')
        c.setAttribute('fill','none')
        return nought
    }
}