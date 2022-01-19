function validation(req, res, next) {
  if (!req.body.title) {
    return res.status(406).send({ success: false, message: 'title field is required.' });
  }
  if (!req.body.description) {
    return res.status(406).send({ success: false, message: 'description field is required.' });
  }
  if (!req.body.closedAt) {
    return res.status(406).send({ success: false, message: 'closedAt field is required.' });
  }
  if (!req.body.createdAt) {
    return res.status(406).send({ success: false, message: 'createdAt field is required.' });
  }
  if (!req.body.status) {
    return res.status(406).send({ success: false, message: 'status field is required.' });
  }
  if (!req.body.solution) {
    return res.status(406).send({ success: false, message: 'solution field is required.' });
  }
  if (!req.body.project_idproject || typeof req.body.project_idproject !== 'number') {
    return res.status(406).send({ success: false, message: 'project_idproject field is required.' });
  }
  if (!req.body.customer_idcustomer || typeof req.body.customer_idcustomer !== 'number') {
    return res.status(406).send({ success: false, message: 'customer_idcustomer field is required.' });
  }
  if (!req.body.manager_idmanager || typeof req.body.manager_idmanager !== 'number') {
    return res.status(406).send({ success: false, message: 'manager_idmanager field is required.' });
  }
  next();
}
module.exports = { validation };