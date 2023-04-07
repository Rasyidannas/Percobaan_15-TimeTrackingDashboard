const port = process.env.PORT || 3900
const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')
const viewPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

app.set('view engine', 'hbs')
app.set('views', viewPath)
hbs.registerPartials(partialsPath)

app.use(express.static(publicDirectoryPath))

//this for daily
app.get('/', (req, res)=>{
    res.render('index', {
        title: 'Time Tracking Dashboard',
        active: {daily: true},
        overview: 'day',
        work: {main: 5, previous: 7},
        play: {main: 1, previous: 2},
        study: {main: 0, previous: 1},
        exercise: {main: 1, previous: 1},
        social: {main: 1, previous: 3},
        selfcare: {main: 0, previous: 1}
    })
})

//this for weekly
app.get('/weekly', (req, res)=>{
    res.render('weekly', {
        title: 'Time Tracking Dashboard',
        active: {weekly: true},
        overview: 'week',
        work: {main: 32, previous: 36},
        play: {main: 10, previous: 8},
        study: {main: 4, previous:7 },
        exercise: {main: 4, previous: 5},
        social: {main: 5, previous: 10},
        selfcare: {main: 2, previous: 2}
    })
})

app.get('/monthly', (req, res)=>{
    res.render('monthly', {
        title: 'Time Tracking Dashboard',
        active: {monthly: true},
        overview: 'month',
        work: {main: 103, previous: 128},
        play: {main: 23, previous: 29},
        study: {main: 13, previous: 19},
        exercise: {main: 11, previous: 18},
        social: {main: 21, previous: 23},
        selfcare: {main: 7, previous: 11}
    })
})

app.listen(port, ()=>{
    console.log(`Server is up on port ${port}`)
})