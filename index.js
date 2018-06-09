'use strict'

const express = require('express')
const app = express()
const path = require('path')
const projects = require('./projects.json')

app.use(express.static(path.join(__dirname, '/resources')))

app.set('view engine', 'pug')
app.set('views', 'views')

app.get('/', (req, res) => {
  res.render('index', {
    apps: projects.apps,
    bots: projects.bots,
    total: projects.apps.length + projects.bots.length
  })
})

const server = app.listen(3000, function () {
  console.log(`The app is running on port ${server.address().port}`)
})
