const express = require('express');
const router = express.Router();
const { create, update, read, _delete } = require('../controller/customer.controller.js');
router.post('/create', create);
router.get('/read', read);
router.post('/update', update);
router.post('/delete', _delete);
module.exports = router;