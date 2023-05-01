const express = require('express')
const router = express.Router()

const Book = require('../models/Book')

router.get('/', async (req, res) => {

  try {
    const books = await Book.find()
    res.json(books)
  } catch (err) {
    res.json({ message: err })
  }
})

router.get('/:bookId', async (req, res) => {

  const bookId = req.params.bookId

  try {
    const book = await Book.findById(bookId)
    res.json(book)
  } catch (err) {
    res.json({ message: err })
  }
})

router.post('/', async (req, res) => {

  const book = new Book({
    title: req.body.title,
    author: req.body.author,
    pages: req.body.pages
  })

  try {
    const savedBook = await book.save()
    res.json(savedBook)
  } catch (err) {
    res.json({ message: err })
  }

  book.save().then((data) => {
    res.json(data)
  }).catch((err) => {
    res.json({ message: err })
  })
})

router.patch('/:bookId', async (req, res) => {

  const bookId = req.params.bookId
  try {
    const updatedBook = await Book.updateOne(
      { _id: bookId },
      {
        $set: {
          title: req.body.title,
          author: req.body.author,
          pages: req.body.pages
        }
      },
    )
    res.json(updatedBook)
  } catch (err) {
    res.json({ message: err })
  }
})

router.delete('/:bookId', async (req, res) => {

  const bookId = req.params.bookId
  try {
    const removePost = await Book.deleteOne({ _id: bookId })
    res.json(removePost)
  } catch (err) {
    res.json({ message: err })
  }
})

module.exports = router
