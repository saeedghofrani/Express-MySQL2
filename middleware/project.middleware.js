function validation(req, res, next) {
  if (!req.body.title) {
    return res.status(406).send({ success: false, message: 'title  is required.' });
  }
  if (!req.body.description) {
    return res.status(406).send({ success: false, message: 'description  is required.' });
  }
  next();
}
module.exports =  validation ;