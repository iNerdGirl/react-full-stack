
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('author').del()
    .then(function () {
      // Inserts seed entries
      let authors = [{
        id: 1,
        firstName: 'Douglas',
        lastName: 'Adams'
      },{
        id: 2,
        firstName: 'Frank',
        lastName: 'Herbert'
      },{
        id: 3,
        firstName: 'Neil',
        lastName: 'Gaiman'
      },{
        id: 4,
        firstName: 'Stephen',
        lastName: 'King'
      },{
        id: 5,
        firstName: 'J.R.R.',
        lastName: 'Tolkien'
      },{
        id: 6,
        firstName: 'George R.R.',
        lastName: 'Martin'
      }];
      return knex('author').insert(authors)
        .then(() => {
          return knex.raw('ALTER SEQUENCE author_id_seq RESTART WITH 7;');
        });
    });
};
