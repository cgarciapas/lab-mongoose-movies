const express = require('express');
const router = express.Router()

const celebritiesController = require('../controllers/celebrity.controller');

router.get('/', celebritiesController.list)
router.get('/create', celebritiesController.create)
router.post('/create', celebritiesController.doCreate)
router.get('/:id', celebritiesController.get)

module.exports = router;