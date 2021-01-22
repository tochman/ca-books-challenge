

const booksController = {
  index(request, response) {
    const collection = {
      books: [
        {
          title: 'Fun With Node',
          author: 'T. Ochman'
        },
        {
          title: 'Fun With Node Part II',
          author: 'T. Ochman'
        }
      ]
    }
    response.json(collection)
  },
  show() {

  }
}

module.exports = booksController