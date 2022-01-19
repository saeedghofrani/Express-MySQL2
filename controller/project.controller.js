const mysqlQuery = require('../modules/query.module.js');
const { checkUserproject } = require('../modules/checkUser.module.js');
const read = (_request, response) => {
    const sql = "SELECT * FROM `project`";
    mysqlQuery(sql, response, 200, "read");
};
const create = (request, response) => {
    const { title, description } = request.body;
    const sql = "INSERT INTO `CRM`.`project` (`title`, `description`) VALUES ( ?, ?);";
    const data = [title, description];
    mysqlQuery(sql, response, 201, "create", data);
};
const update = (request, response) => {
    const id = request.params.id;
    const { title, description } = request.body;
    const sql = "UPDATE `CRM`.`project` SET `title` = ?, `description` = ? WHERE `idproject` = ?;";
    const data = [title, description, id];
    (checkUserproject(id)) ? response.status(404).send('wrong id') : mysqlQuery(sql, response, 202, "update", data);
};
const _delete = (request, response) => {
    const id = request.params.id;
    const sql = "DELETE FROM project WHERE `idproject` = ?";
    const data = [id];
    (checkUserproject(id)) ? response.status(404).send('wrong id') : mysqlQuery(sql, response, 202, "delete", data);
};
module.exports = { create, update, read, _delete };