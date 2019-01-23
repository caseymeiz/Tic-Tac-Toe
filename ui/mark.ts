

export abstract class Mark {
    namespace = 'http://www.w3.org/2000/svg'
    abstract id: string

    abstract symbol(): SVGSymbolElement

    use(attrs: Object): SVGUseElement{
        let use = <SVGUseElement> document.createElementNS(this.namespace, 'use')
        use.setAttribute('href', '#'+this.id)
        for (let attr in attrs) {
            use.setAttribute(attr, attrs[attr])
        }
        use.setAttribute('width', '1')
        use.setAttribute('height', '1')
        use.setAttribute('class', 'mark '+this.id)
        return use
    }
}