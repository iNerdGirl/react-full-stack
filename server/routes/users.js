const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.json({
    message: "This is the user's route"
  });
});

module.exports = router;
