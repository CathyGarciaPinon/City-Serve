var express = require('express');
var router = express.Router();
var outreachesCtrl = require('../controllers/outreaches');
const ensureLoggedIn = require('../config/ensureLoggedIn');


/* GET users listing. */
router.get('/', outreachesCtrl.index);

router.get('/new', ensureLoggedIn, outreachesCtrl.new);

router.get('/:id', outreachesCtrl.show);

router.post('/', ensureLoggedIn, outreachesCtrl.create);
  
  module.exports = router;