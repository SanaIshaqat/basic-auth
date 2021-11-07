'use strict';
const supertest = require('supertest')
const server = require('../src/server');
const base64= require('base-64')
const request = supertest(server.app);



describe('Basic Auth Testing', () =>{
    it('sign-up:creating a new user correctly', async () => {

        
      const response = await request.post('/signup').send({ username: 'sana', password: '12345' });
      expect(response.status).toEqual(201);
   
      expect(response.body.username).toEqual('sana')
    });
    it('POST signin', async () => {
        
        let response = await request.post('/signin').auth('sana', '12345');;
        expect(response.status).toEqual(200);
        expect(response.body.username).toEqual('sana');
    });
});

    describe('test middleware', () => {
        it('Does the middleware work', async () => {
            let test= base64.encode('sana:12345');
            let response = await request.post('/signin').set(`Authorization`, `Basic ${test}`);
            expect(response.status).toEqual(200);
            expect(response.body).toBeTruthy();
        });
        it('routes assert the requirements (signup/signin)', async () => {
            const response = await request.post('/');
            expect(response.status).toBe(404);
        });


    it('when signing in with uncorrect data', async () => {
  
    const response = await request.post('/signin').auth('fghfg', 'false');;
    expect(response.status).toBe(403);
    expect(response.body.username).toBe(undefined);
  });

  it('(sign up with existing user name)', async () => {
    const test = {
        username: 'sana',
        password: '12345',
      };
    const response = await request.post('/signup').send(test);
    expect(response.status).toBe(201);
  });
  
});


