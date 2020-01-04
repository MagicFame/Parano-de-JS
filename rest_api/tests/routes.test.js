/* eslint-env jest */

const request = require('supertest')
const app = require('../server')
const mongoose = require('mongoose')

beforeAll(done => {
  mongoose.connect('mongodb://localhost/testingDB', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
  done()
})

describe('Get Endpoints', () => {
  it('should do a get', async () => {
    const res = await request(app).get('/api/users')
    console.log(res)
    expect(res.statusCode).toEqual(200)
  })
})

afterAll(done => {
  mongoose.connection.close()
  done()
})
