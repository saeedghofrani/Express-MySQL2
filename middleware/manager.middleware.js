function validation(req, res, next) {
  if (!req.body.name) {
    return res.status(406).send({ success: false, message: 'name is required.' });
  }
  if (!req.body.natonalCode) {
    return res.status(406).send({ success: false, message: 'national Code  is required.' });
  }
  if (!req.body.phoneNumber) {
    return res.status(406).send({ success: false, message: 'phone Number  is required.' });
  }
  next();
}
module.exports =  validation ;