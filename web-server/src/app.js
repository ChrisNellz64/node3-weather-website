const path = require('path')
const hbs = require('hbs')
const express = require('express')
const chalk = require('chalk')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')


// console.log(__dirname)
// console.log(path.join(__dirname, '../public'))

const app = express()
const port = process.env.PORT || 3000

//Define paths for Express config
const publicDirectoryPath = (path.join(__dirname, '../public'))
const partialsPath = path.join(__dirname, '../templates/partials')
const viewsPath = path.join(__dirname, '../templates/views')
app.use(express.static(publicDirectoryPath))

// Setuphandlebars engine and views
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)


app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Chris Nellz'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me',
        name: 'Chris Nellz'
    })
})



app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        name: 'Chris Nellz'
    })
})

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error:'You must provide a location'
    })
        }
        console.log(req.query.address)
        geocode(req.query.address, (error, {latitude, longitude, location} = {}) => {

            if (error) {
                return res.send({ error })
            } 
            forecast(longitude, latitude, (error, forecastData) => {
                if (error) {
                    return res.send({ error })
                }
        
                res.send({
                   forecast: forecastData,
                    location,
                    address: req.query.address
                })
                console.log(chalk.yellow(location)) 
                console.log(forecastData)
            })
            
        })
        // res.send({
        // location: req.query.location,
        // temperature: 69,
        // weather: 'Stormy'
    })
// })

app.get('/products', (req, res) => {
    if (!req.query.search) {
    return res.send({
        error:'You must provide a search term'
})
    }
    console.log(req.query.search)
    res.send({
        products: []
    })
})


app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404 - help page not found',
        footer: 'Return to "/help" for assistance'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404 - page not found',
        footer: 'Please navigate back to another page'
    })
})

app.listen(port, () => {
    console.log('Server is up on port 3000.')
})