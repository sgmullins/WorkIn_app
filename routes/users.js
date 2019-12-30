const express = require('express');
const router = express.Router({ mergeParams: true });
const { postRegister, postLogin, getLogout } = require('../controllers/user');
const { errorHandler } = require('../middleware/user');

/* GET user /register. */
router.get('/register', (req, res, next) => {
  res.send('GET Register');
});

/* POST user /register. */
router.post('/register', errorHandler(postRegister));

/* GET user /login. */
router.get('/login', (req, res, next) => {
  res.send('GET Login page');
});

/* POST user /login. */
router.post('/login', postLogin);

/* GET /logout */
router.get('/logout', getLogout);

/////These will only be for each user //////
/* GET user /profile. */
router.get('/profile', (req, res, next) => {
  res.send('GET profile');
});

/* PUT user /profile/:user_id. updates their profile page */
router.put('/profile/:user_id', (req, res, next) => {
  res.send('PUT profile/:user_id');
});

/////Password forget routes///////

/* GET /forgot-password. */
router.get('/forgot', (req, res, next) => {
  res.send('GET /forgot');
});

/* PUT /forgot-password. */
router.put('/forgot', (req, res, next) => {
  res.send('PUT /forgot');
});

/* GET /reset/:token */
router.get('/reset/:token', (req, res, next) => {
  res.send('GET /reset');
});

/* PUT /reset/:token */
router.put('/reset/:token', (req, res, next) => {
  res.send('PUT /reset-pw');
});

module.exports = router;