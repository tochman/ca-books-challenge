

const booksController = {
  index(request, response) {
    const collection = {
      books: [
        {
          title: 'Fun With cool guy',
          author: 'T. Ochman'
        },
        {
          title: 'We are all in this together',
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
hi