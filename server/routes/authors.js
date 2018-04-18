const express = require('express');
const router = express.Router();

const queries = require('../queries');

router.get('/', (req, res, next) => {
  queries.listAllAuthors()
    .then(author => {
      res.json({author})
    }).catch(next);
});

router.get('/:id', (req, res, next) => {
  queries
    .readAuthor(req.params.id)
    .then(author => {
      author
        ? res.json({ author })
        : res.status(404).json({ message: 'Not found' });
    })
    .catch(next);
});

router.post('/', (req, res, next) => {
  queries.createAuthor(req.body).then(author => {
    res.status(201).json({author: author});
  }).catch(next);
});

router.delete('/:id', (req, res, next) => {
  queries.deleteAuthor(req.params.id).then(() => {
    res.status(204).json({deleted: true});
  }).catch(next);
});

router.put('/:id', (req, res, next) => {
  queries.updateAuthor(req.params.id, req.body).then(author => {
    res.json({author: author[0]});
  }).catch(next);
});

module.exports = router;