const express = require('express');
const router = express.Router();
const { create, update, read, _delete } = require('../controller/ticket.controller.js');
router.route('/')
    .get(read)
    .post(create);
router.route('/:id')
    .patch(update)
    .delete(_delete);
module.exports = router;