const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    user: 'admin',
    password: '12345',
    database: 'laboratoria'
  }
});

knex.select('*').from('users').then(console.log(results));
knex.insert({username: 'Test', password: 'test'}).into('users').then(console.log);
knex('users').update({username: 'User_Test'}).where('username', 'Test1').then(console.log);
knex('users').where('id', req.params.id).del().then(console.log);