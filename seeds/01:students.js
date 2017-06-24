
exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE student RESTART IDENTITY CASCADE;')
    .then(function () {
      // Inserts seed entries
      return knex('student').insert([
        {name: 'caroline'},
        {name: 'marlena'}
      ]);
    });
};
