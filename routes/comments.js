const express = require('express');
const router = express.Router();
const commentsCtrl = require('../controllers/comments');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.post('/outreaches/:id/reviews', ensureLoggedIn, commentsCtrl.create);

router.delete('/comments/:id', ensureLoggedIn, commentsCtrl.delete);

router.get('/books/:id/edit', ensureLoggedIn, commentsCtrl.edit);

module.exports = router;
