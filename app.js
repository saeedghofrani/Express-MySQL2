const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const morgan = require('morgan');
const app = express();
const appRouter = require('./routes/app.route.js');
app.use(morgan('tiny'));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', appRouter);
// catch 404 and forward to error handler
app.use(function (_req, _res, next) { next(createError(404)); });
// error handler
app.use(function (err, req, res, _next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 404);
  req.accepts('json') ? res.send({ error: 'Not found' }) : res.type('txt').send('Not found');
});
module.exports = app;
