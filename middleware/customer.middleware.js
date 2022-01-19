function validation(req, res, next) {
  if (!req.body.name) {
    return res.status(406).send({ success: false, message: 'name field is required.' });
  }
  if (!req.body.Ctype) {
    return res.status(406).send({ success: false, message: 'Ctype field is required.' });
  }
  if (!req.body.income) {
    return res.status(406).send({ success: false, message: 'income field is required.' });
  }
  if (!req.body.createdAt) {
    return res.status(406).send({ success: false, message: 'createdAt field is required.' });
  }
  if (!req.body.phoneNumber) {
    return res.status(406).send({ success: false, message: 'phone Number field is required.' });
  }
  next();
}

module.exports = { validation };