const express = require('express'),
      router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Home Page', body:'Project Manager'});
});

/* GET new user page */
router.get('/sign-in', (req, res, next) => {

  // user validation here

  res.render('sign-in',{ title: 'New User', body:'Project Manager'});
});

/* GET Authenticate user page */
router.get('/login', (req, res, next) => {

  // user validation here

  res.render('login',{ title: 'Login', body:'Project Manager'});
});








module.exports = router;
