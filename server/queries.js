const database = require('./database-connection');

module.exports = {
  listAllBooks() {
    return database('book')
      .select()
      .join('author', 'book.author_id', 'author.id')
  }, 
  listAllAuthors() {
    return database('author')
      .select()
  },
  readBook(id) {
    return database('book')
      .where('book.id', id)
      .first()
      .join('author', 'book.author_id', 'author.id')
  },
  readAuthor(id) {
    return database('author')
      .where('author.id', id)
      .first()
  },
  createAuthor(author) {
    return database('author')
      .insert(author)
      .returning('*')
      .then(record => record[0])
  },
  createBook(book) {
    return database('book')
      .insert(book)
      .returning('*')
      .then(record => record[0])
  },
  updateAuthor(id, author) {
    return database('author')
      .update(author)
      .where('author.id', id)
      .returning('*')
      .then(record => record[0])
  },
  updateBook(id, book) {
    return database('book')
      .update(book)
      .where('book.id', id)
      .returning('*')
      .then(record => record[0])
  },
  deleteAuthor(id) {
    return database('author')
      .where('author.id', id)
      .delete()
  },
  deleteBook(id) {
    return database('book')
      .where('book.id', id)
      .delete()
  }
};