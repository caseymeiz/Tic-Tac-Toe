import {Mark} from "./mark";

export class Space extends Mark {
    id  = 'space'
    symbol(): SVGSymbolElement{
        let space = <SVGSymbolElement> document.createElementNS(this.namespace,'symbol')
        let rect = <SVGRectElement> document.createElementNS(this.namespace, 'rect')
        space.appendChild(rect)
        space.setAttribute('id', this.id)
        space.setAttribute('viewBox', '0 0 10 10')
        rect.setAttribute('x', '0')
        rect.setAttribute('y', '0')
        rect.setAttribute('width', '10')
        rect.setAttribute('height', '10')
        rect.setAttribute('pointer-events', 'visible')
        return space
    }
}