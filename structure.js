const fs = require("fs")
const log = console.log

let text = fs.readFileSync("./books/treasure-island.txt")

log(text.length)
log(typeof text)

text = "" + text // gör om objekt till sträng

let sentences = text.match(/[^\.!\?]+[\.!\?]+/g)

log(sentences.length)