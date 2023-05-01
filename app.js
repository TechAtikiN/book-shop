const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv/config')

const app = express()

// Import Routes
const booksRoutes = require('./routes/books')

// Middleware
app.use(bodyParser.json())
app.use('/books', booksRoutes)

app.get('/', (req, res) => {
  res.send('Home Page')
})

// conenction to mongoDB
mongoose.connect(process.env.MONGODB_URI)
console.log('Connected to MongoDB')

app.listen(3000, () => console.log('Server is running on port 3000'))
