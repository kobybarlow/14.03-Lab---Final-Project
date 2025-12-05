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
    title: 'Our Menu'
  });
});

// Get Info Page
router.get('/info', (req, res) => {
  res.render('info', {
    title: 'info'
  });
});

module.exports = router;