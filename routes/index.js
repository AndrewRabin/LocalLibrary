var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/express', function(req, res, next) {
  res.render('index', { title: 'AR Express' });
});

router.get('/', function(req, res){
  console.error("AR Make /catalog/index.html!");
    res.redirect('/catalog');
})

module.exports = router;
