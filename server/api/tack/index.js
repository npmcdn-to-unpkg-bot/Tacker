'use strict';

var express = require('express');
var controller = require('./tack.controller');
var auth = require('../../auth/auth.service')

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', auth.isAuthenticated(), controller.create);
router.delete('/:id', controller.destroy);

module.exports = router;
