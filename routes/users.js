var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', {
    title: 'Express',
    users: [
      {name: 'Bob', email:'bob@example.com'},
      {name: 'Jim', email:'jim@example.com'},
      {name: 'Joe', email:'joe@example.com'},
    ]
  });
});

module.exports = router;
