require('dotenv').config();

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const passport = require('passport');
const User = require('./models/user');
const session = require('express-session');
const mongoose = require('mongoose');


//Require Routes
const indexRouter = require('./routes/index.js');
const usersRouter = require('./routes/users');
const workspotsRouter = require('./routes/workspots.js');
const reviewsRouter = require('./routes/reviews.js');

const app = express();

//connect to database
mongoose.connect(process.env.DATABASEURL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to DB!');
}).catch(err => {
  console.log('ERROR:', err.message);
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
//Same this as bodyparser now
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Configure Passport and Sessions
app.use(session({
  secret: 'keep workin man',
  resave: false,
  saveUninitialized: true
}))

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//Mount the / routes to the routes
app.use('/', indexRouter);
app.use('/', usersRouter);
app.use('/workspots', workspotsRouter);
app.use('/workspots/:id/reviews', reviewsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
