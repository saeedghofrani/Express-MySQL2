const express = require('express');
const router = express.Router();
const { create, update, read, _delete } = require('../controller/message.controller.js');
router.post('/create', create);
router.get('/read', update);
router.post('/update', read);
router.post('/delete', _delete);
module.exports = router;