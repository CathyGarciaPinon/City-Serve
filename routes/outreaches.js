var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', outreachesCtrl.index);

router.get('/:id', outreachesCtrl.show);
  
  module.exports = router;