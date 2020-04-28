const controller = require('./controller.js');

const router = require('express').Router();

router
.route('/')
.get(controller.get)
.post(controller.post)

router
.route('/:index')
.put(controller.update)
.delete(controller.delete)

module.exports = router;