const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController.js');

// home page
router.get('/', indexController.getIndex);

// ajax request
router.post('/ajax', indexController.handleAjax);

module.exports = router;