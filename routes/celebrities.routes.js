const express = require('express');
const router = express.Router()

const celebritiesController = require('../controllers/celebrity.controller');

router.get('/', celebritiesController.list)
router.get('/create', celebritiesController.create)
router.post('/create', celebritiesController.doCreate)
router.get('/:id', celebritiesController.get)
router.get('/:id/edit', booksController.edit)
router.post('/:id/edit', booksController.doEdit)
router.post('/:id/delete', celebritiesController.delete)

module.exports = router;