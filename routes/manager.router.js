const express = require('express');
const router = express.Router();
const validation = require('../middleware/manager.middleware');
const { create, update, read, _delete } = require('../controller/manager.controller.js');
router.route('/')
    .get(read)
    .post(validation, create);
router.route('/:id')
    .patch(validation, update)
    .delete(_delete);
module.exports = router;