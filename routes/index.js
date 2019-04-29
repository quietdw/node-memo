var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: '备忘录',
    isLogin: true,
    user: {
      username: 'xxx',
    }
  });
});

module.exports = router;