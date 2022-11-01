const express = require('express');
const router = express.Router();
const volunteersCtrl = require('../controllers/volunteers');
const ensureLoggedIn = require('../config/ensureLoggedIn');


router.get('/volunteers/new', ensureLoggedIn, volunteersCtrl.new);

router.post('/volunteers', ensureLoggedIn, volunteersCtrl.create);

router.post('/outreaches/:id/volunteers', ensureLoggedIn, volunteersCtrl.addToRequest);

module.exports = router;