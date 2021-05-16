'use strict';

/////////////////////
////// Imports /////
///////////////////

const server = require('../server.js');
const supertest = require('supertest');
const request = supertest(server.app);


describe('server', ()=>{
  it('should get 404 status', async () => {
    const response = await request.get('/omar');
    expect(response.status).toBe(404);
  });

  it('should get a greeting message', async () => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello from the other Side');
  });

  it('Should get an error message', async () => {
    const response = await request.get('/error');
    expect(response.status).toEqual(500);
  });

});