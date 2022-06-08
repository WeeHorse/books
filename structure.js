const fs = require("fs")
const log = console.log

let text = fs.readFileSync("./books/treasure-island.txt")

log(text.length)
log(typeof text)

text = "" + text // gör om objekt till sträng

text = text.split("PART ONE")[2] // hämta ut relevant text (tar bort bokens index)

text = text.split("\n\n").join(". ") // splitta dubbla radbrytningar till meningar

text = text.split("\n").join(" ") // splitta enkla radbrytningar til mellanslag

let sentences = text.match(/[^\.!\?]+[\.!\?]+/g) // splitta texten till meningar

let index = []

for(let sentence of sentences){
    let s = {
        sentence: sentence.trim() // ta bort whitespace runt meningen
    }
    index.push(s)
}

log(index[103])