const { Console } = require('console')
const http = require('http')
const url = 'http://api.weatherstack.com/current?access_key=da02b1b6a6352ca0ffc3c6da395f5c71&query=45,-75&units=f'

const request = http.request(url, (response) => {
    let data = ''
    response.on('data', (chunk) => {
        data = data + chunk.toString()
        // console.log(chunk)
    })
    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })

} )
request.on('error', (error) => {
    console.log('An error', error)
})
request.end()