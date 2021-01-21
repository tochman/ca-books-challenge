const app = require('../../app')
const supertest = require('supertest')
const { expect } = require('chai')

let server, request, response


before(done => {
  server = app.listen(done)
  request = supertest.agent(server)
});

after(done => {
  server.close(done)
});

describe('GET /books', () => {

  beforeEach(async () => {
    response = await request.get('/books')
  });

  it('is expected to respond with status 200', () => {
    expect(response.status)
      .to.equal(200)
  });

  it('is expected to return an index of books', () => {
    const expectedResponse = {
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
    expect(response.body)
      .to.eql(expectedResponse)

  })
});