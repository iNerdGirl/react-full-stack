const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');

const index = require('./routes/index');
const users = require('./routes/users');
const books = require('./routes/books');
const authors = require('./routes/authors');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', index);
app.use('/users', users);
app.use('/books', books);
app.use('/authors', authors);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {

  // render the error page
  res.status(err.status || 500);
  res.json({
    message: err.message,
    stack: req.app.get('env') === 'development' ? err.stack : {}
  });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening on ${port}`);
})

