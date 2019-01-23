import {Mark} from "./mark";

export class Cross extends Mark {
    id = 'x'
    symbol(): SVGSymbolElement {
        let x = <SVGSymbolElement> document.createElementNS(this.namespace,'symbol')
        let p1 = <SVGPathElement> document.createElementNS(this.namespace, 'path')
        let p2 = <SVGPathElement> document.createElementNS(this.namespace, 'path')
        x.setAttribute('viewBox', '0 0 10 10')
        x.setAttribute('id', this.id)
        x.appendChild(p1)
        x.appendChild(p2)
        p1.setAttribute('d','M 1 1 L 9 9 Z')
        p1.setAttribute('stroke-width','1')
        p2.setAttribute('d','M 1 9 L 9 1 Z')
        p2.setAttribute('stroke-width','1')
        return x
    }
}