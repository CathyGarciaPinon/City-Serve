const express = require('express');
const router = express.Router();
const commentsCtrl = require('../controllers/comments');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.post('/outreaches/:id/comments', ensureLoggedIn, commentsCtrl.create);

router.put('/outreaches/:id/comments', ensureLoggedIn, commentsCtrl.update);

router.delete('/comments/:id', ensureLoggedIn, commentsCtrl.delete);

router.get('/comments/:id/edit', ensureLoggedIn, commentsCtrl.edit);

module.exports = router;
