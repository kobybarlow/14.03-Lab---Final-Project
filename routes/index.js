var express = require('express');
var router = express.Router();

let comments = [];

// GET home page
router.get('/', (req, res) => {
  res.render('index', {
    title: 'Downtown Donuts'
  });
});


// GET Menu Page
router.get('/menu', (req, res) => {
  res.render('menu', {
    title: 'Downtown Donuts Menu'
  });
});

// Get Info Page
router.get('/info', (req, res) => {
  res.render('info', {
    title: 'About Us'
  });
});

// Get Reviews Page
router.get('/reviews', function(req, res, next) {
  res.render('reviews', {
    title: 'Reviews', comments: comments });
});

// POST new reviews
router.post('/reviews', function(req, res, next) {
  const comment = req.body.comment?.trim();
  if (comment) {
    comments.push(comment);
  }
  res.redirect('/reviews');
});

module.exports = router;