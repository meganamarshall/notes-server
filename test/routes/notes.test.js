require('dotenv').config();
const request = require('supertest');
const mongoose = require('mongoose');
const connect = require('../../lib/utils/connect');
const app = require('../../lib/app');

describe('notes routes', () => {
  beforeAll(() => {
    return connect();
  });

  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });

  afterAll(() => {
    return mongoose.connection.close();
  });

  it('can create a note', () => {
    return request(app)
      .post('/api/v1/notes')
      .send({ title: 'hello', body: 'world' })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          title: 'hello',
          body: 'world',
          __v: 0
        });
      });
  });
});
