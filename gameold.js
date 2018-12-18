
x = '<svg viewbox="0 0 100 100"><path stroke-linecap="round" d="M 10 10 L 90 90 Z" stroke="currentColor" fill="transparent" stroke-width="10"/><path stroke-linecap="round" d="M 10 90 L 90 10 Z" stroke="currentColor" fill="transparent" stroke-width="10"/></svg>'
o = '<svg viewbox="0 0 100 100"><circle cx="50" cy="50" r="40" stroke="currentColor" stroke-width="10" fill="none" /></svg>'

middle = document.getElementsByClassName("square")[4]

middle.innerHTML = o



boardModel = Array(9).fill(null)


b = document.getElementsByClassName("square")
console.log(b.length)
for (var i = 0; i < b.length; i++) {
    b[i].innerHTML = boardModel[i]
}

