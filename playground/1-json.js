const fs = require('fs')
/*const book ={
    title: 'star wars',
    author: 'George Lucas'
}

const bookJSON = JSON.stringify(book)
fs.writeFileSync('1-json.json', bookJSON)*/
const id ={
    name: 'Chris',
    planet: 'Earth',
    age: '19'
}
const idJSON = JSON.stringify(id)
fs.writeFileSync('1-json.json', idJSON)
const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
console.log(data.name)
console.log(data.planet)
console.log(data.age)