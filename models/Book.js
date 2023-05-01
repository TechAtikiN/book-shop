const mongoose = require('mongoose')

const BookSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  pages: {
    type: Number,
    required: true
  },
  publishedOn: {
    type: String,
    default: Date.now
  }
})

module.exports = mongoose.model('Book', BookSchema)