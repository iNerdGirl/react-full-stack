const express = require('express');
const router = express.Router();

const queries = require('../queries');

router.get('/', (req, res, next) => {
  queries.listAllBooks()
    .then(books => {
      res.json({books});
    }).catch(next);
});

router.get('/:id', (req, res, next) => {
  queries
    .readBook(req.params.id)
    .then(book => {
      book
        ? res.json({ book })
        : res.status(404).json({ message: 'Not found' });
    })
    .catch(next);
});

router.post('/', (req, res, next) => {
  queries.createBook(req.body).then(book => {
    res.status(201).json({book: book});
  }).catch(next);
});

router.delete('/:id', (req, res, next) => {
  queries.deleteBook(req.params.id).then(() => {
    res.status(204).json({deleted: true});
  }).catch(next);
});

router.put('/:id', (req, res, next) => {
  queries.updateBook(req.params.id, req.body).then(book => {
    res.json({book: book[0]});
  }).catch(next);
});

module.exports = router;