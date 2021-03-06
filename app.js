require("dotenv").config();

// const createError = require("http-errors");
const express = require("express");
const cors = require("cors");
const engine = require("ejs-mate");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const passport = require("passport");
const User = require("./models/user");
const session = require("express-session");
const mongoose = require("mongoose");
const connectDB = require("./bin/db");
const methodOverride = require("method-override");

//Require Routes
const indexRouter = require("./routes/index.js");
const usersRouter = require("./routes/users");
const workspotsRouter = require("./routes/workspots.js");
const reviewsRouter = require("./routes/reviews.js");

const app = express();

//connect to database
connectDB();

// use ejs-locals for all ejs templates:
app.engine("ejs", engine);

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
//Same this as bodyparser now
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method"));
app.use(cors());

//Configure Passport and Sessions
app.use(
  session({
    secret: "keep workin man",
    resave: false,
    saveUninitialized: true
  })
);
app.use(passport.initialize());
app.use(passport.session());

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//set local variables middleware (pre-route)
app.use(function(req, res, next) {
  req.user = {
    _id: "5e2b2cd1c1f50ca804a7151b",
    username: "steve"
  };
  res.locals.currentUser = req.user;
  //set default page title
  res.locals.title = "WorkIn";
  //set success flash message
  res.locals.success = req.session.success || "";
  delete req.session.success;
  //set error flash message
  res.locals.error = req.session.error || "";
  delete req.session.error;
  //continue to next function in middleware chain
  next();
});

//Mount the / routes to the routes
app.use("/", indexRouter);
app.use("/", usersRouter);
app.use("/workspots", workspotsRouter);
app.use("/workspots/:id/reviews", reviewsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});
// error handler
app.use(function(err, req, res, next) {
  // // set locals, only providing error in development
  // res.locals.message = err.message;
  // res.locals.error = req.app.get('env') === 'development' ? err : {};

  // // render the error page
  // res.status(err.status || 500);
  // res.render('error');
  //console log error for viewing in production logs
  console.log(err);
  // set the session error to the error message and redirect back to route which will trigger pre-route flash handler
  req.session.error = err.message;
  res.redirect("back");
});

module.exports = app;
