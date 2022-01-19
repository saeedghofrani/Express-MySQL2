function validation(req, res, next) {
  if (!req.body.name) {
    return res.status(406).send({ success: false, message: 'name field is required.' });
  }
  if (!req.body.nationalCode) {
    return res.status(406).send({ success: false, message: 'national Code field is required.' });
  }
  if (!req.body.phoneNumber) {
    return res.status(406).send({ success: false, message: 'phone Number field is required.' });
  }
  next();
}
module.exports = { validation };