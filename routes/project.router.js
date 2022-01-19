const express = require('express');
const router = express.Router();
const validation = require('../middleware/project.middleware');
const { create, update, read, _delete } = require('../controller/project.controller.js');
router.route('/')
    .get(read)
    .post(validation, create);
router.route('/:id')
    .patch(validation, update)
    .delete(_delete);
module.exports = router;