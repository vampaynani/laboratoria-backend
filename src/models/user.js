const { knex } = require('../config');

const User = {
  create: (username, password) => {
    return knex.insert({username, password}).into('users');
  },
  update: (id, username, password) => {
    return knex('users').update({username, password}).where('id', id);
  },
  deleteById: id => {
    return knex('users').where('id', id).del();
  },
  readAll: () => {
    return knex.select('*').from('users');
  },
  readById: id => {
    return knex.select('*').from('users').where('id', id);
  }
}

module.exports = { User };