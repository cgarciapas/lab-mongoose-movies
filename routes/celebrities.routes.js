const express = require('express');
const router = express.Router()

const celebritiesController = require('../controllers/users.controller');

router.get('/', celebritiesController.list)
router.get('/create', celebritiesController.create)
router.post('/create', celebritiesController.doCreate)

module.exports = router;