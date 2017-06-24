const knex = require('./knex');

module.exports = {
  getAll() {
    return knex('student');
  },
  postOne(){
    return knex('student');
  }
};
