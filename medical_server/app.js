var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRoute = require('./routes/login.routes');
var sendsmsRoute = require('./routes/sendsms.routes');
var sendEmailRoute = require('./routes/mailer.route');
var registerRoute = require('./routes/register');
var countRoute = require('./routes/totaluser.routes');
var farmerproductRoute = require('./routes/farmerproduct.routes');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login',loginRoute);
app.use('/sendsms',sendsmsRoute);
app.use('/sendemail',sendEmailRoute);
app.use('/register',registerRoute);
app.use('/count',countRoute);
app.use('/farmerproductlist',farmerproductRoute);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
