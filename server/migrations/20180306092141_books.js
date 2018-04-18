
exports.up = function(knex, Promise) {
  return knex.schema.createTable('book', table => {
    table.increments('id').notNullable();
    table.text('title').notNullable();
    table.text('isbn').notNullable();
    table.float('cost').notNullable();
    table.float('qty').notNullable();
    table.text('image_url').notNullable();
    table
      .integer('author_id')
      .unsigned()
      .references('id')
      .inTable('author')
      .onDelete('cascade')
      .notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('book');
};
