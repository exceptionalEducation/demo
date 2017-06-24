
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('student', function(table){
    table.increments('id').primary();
    table.string('name').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('student');
};
