var express = require('express');
var router = express.Router();

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
router.get('/reviews', (req, res) => {
  res.render('reviews', {
    title: 'Reviews'
  });
});
module.exports = router;