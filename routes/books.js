const express = require('express')
const router = express.Router()

const Post = require('../models/Book')

router.get('/', (req, res) => {
  res.send('Gives all books')
})

router.get('/:bookId', (req, res) => {
  const bookId = req.params.bookId

  res.status(200).json({
    message: `Book with ID of ${bookId}`
  })
})


router.post('/', (req, res) => {
  res.status(201).json({
    message: `Created new book`
  })
})

module.exports = router
