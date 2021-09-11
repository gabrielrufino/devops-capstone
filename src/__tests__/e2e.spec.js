const request = require('supertest')

const app = require('../')

describe('Tests end to end', () => {
  test('Should receive status 200', (done) => {
    request(app)
      .get('/')
      .expect(200, done);
  })

  test('Should receive status 200', (done) => {
    request(app)
      .get('/')
      .expect(200, done);
  })

  afterAll(() => {
    app.close()
  })
})
