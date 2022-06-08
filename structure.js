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
        sentence: sentence.trim(), // ta bort whitespace runt meningen
        words: () => sentence.split(" ") // array med ord
    }
    // arr[arr.length-1]   get last element of array   remove . from end of word
    s.lastWord = () => s.words()[s.words().length-1].split(".")[0]
    s.lastSyllable = () => s.lastWord().match(/[aeiou].{1,2}$/g)
    index.push(s)
}

log(index[100].lastSyllable())

let rhymes = {}

for(let sentence of index){
    if(!rhymes[sentence.lastSyllable()]){
        rhymes[sentence.lastSyllable()] = []
    }
    rhymes[sentence.lastSyllable()].push(sentence)
}

// filter a dictionary (obj) - remove single items (we only want rhymes)
for(let key in rhymes){
    if(rhymes[key].length < 2){
        delete rhymes[key]
    }
}

// log(rhymes)

let fun = []   // ["ire","iar","er"]
for(let syllable of ["ire","iar","er","ier"]){
    if(rhymes[syllable]){
        fun.push(rhymes[syllable])
    }
}

log(fun)


let wordIndex = {}
for(word of text.split(" ")){
    word = word.split(".")[0].split("!")[0].split("?")[0]
    word = word.toLowerCase()
    word = word.replace(/[\'\"]/g,"")
    if(!wordIndex[word]){
        wordIndex[word] = 0
    }
    wordIndex[word]++
}

log(wordIndex)

