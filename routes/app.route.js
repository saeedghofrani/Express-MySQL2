const express = require('express');
const router = express.Router();
const managerRouter = require('./manager.router.js');
const projectRouter = require('./project.router.js');
const customerRouter = require('./customer.router.js');
const ticketRouter = require('./ticket.router.js');
const messageRouter = require('./message.router.js');
router.use((req, res, next) => {
    console.log(`request was made: ${req.url}`);
    next();
});
router.use('/manager', managerRouter);
router.use('/project', projectRouter);
router.use('/customer', customerRouter);
router.use('/ticket', ticketRouter);
router.use('/message', messageRouter);
module.exports = router;