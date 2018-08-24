const chai = require('chai');
const chaiHttp = require('chai-http');
const { app } = require('../index');
const expect = chai.expect;

chai.use(chaiHttp);

describe('Users Endpoints', function(){
  describe('GET /users', function(){
    it('Debe ser una respuesta exitosa con una lista de usuarios', function(){
      return chai.request(app).get('/users')
        .then(res => {
          expect(res).to.have.status(200);
          expect(res).to.be.json;
          expect(res.body).to.be.a('array');
        });
    });
    it('Debe ser una respuesta exitosa y cada usuario debe traer las llaves correctas', function(){
      return chai.request(app).get('/users')
        .then(res => {
          expect(res).to.have.status(200);
          expect(res).to.be.json;
          res.body.forEach(user => {
            expect(user).to.be.a('object');
            expect(user).to.include.keys('id', 'username', 'password');
          });
        });
    });
  })
});