const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    user: 'admin',
    password: '12345',
    database: 'laboratoria'
  }
});

module.exports = { knex };