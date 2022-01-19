function validation(req, res, next) {
  if (!req.body.title) {
    return res.status(406).send({ success: false, message: 'title  is required.' });
  }
  if (!req.body.description) {
    return res.status(406).send({ success: false, message: 'description  is required.' });
  }
  if (!req.body.closedAt) {
    return res.status(406).send({ success: false, message: 'closedAt  is required.' });
  }
  if (!req.body.createdAt) {
    return res.status(406).send({ success: false, message: 'createdAt  is required.' });
  }
  if (!req.body.status) {
    return res.status(406).send({ success: false, message: 'status  is required.' });
  }
  if (!req.body.solution) {
    return res.status(406).send({ success: false, message: 'solution  is required.' });
  }
  if (!req.body.project_idproject || typeof req.body.project_idproject !== 'number') {
    return res.status(406).send({ success: false, message: 'project_idproject  is required.' });
  }
  if (!req.body.customer_idcustomer || typeof req.body.customer_idcustomer !== 'number') {
    return res.status(406).send({ success: false, message: 'customer_idcustomer  is required.' });
  }
  next();
}
module.exports = validation;