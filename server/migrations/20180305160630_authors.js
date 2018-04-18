
exports.up = function(knex, Promise) {
  return knex.schema.createTable('author', table => {
    table.increments('id').notNullable();
    table.text('firstName').notNullable();
    table.text('lastName').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('author');
};
