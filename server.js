require('dotenv').config()


const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')

const indexRouter = require('./routes/index')
const authorRouter=require('./routes/authors')

// EJS settings
app.set('view engine', 'ejs')
const path = require('path')
app.set('views', path.join(__dirname, 'views'))
app.set('layout', 'layouts/layout')

// Middleware
app.use(expressLayouts)
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))
app.use('/', indexRouter)
app.use('/authors',authorRouter)

const mongoose=require('mongoose')
mongoose.connect(process.env.DATABASE_URL)

const db=mongoose.connection
db.on('error',error => console.error(error))
db.once('open',() => console.log('Connected to Mongoose'))

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
})

