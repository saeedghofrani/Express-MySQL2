const mysqlQuery = require('../modules/query.module.js');
const create = (request, response) => {
    const { title, description } = request.body;
    const sql = "INSERT INTO `CRM`.`project` (`title`, `description`) VALUES ( ?, ?);";
    const data = [title, description];
    mysqlQuery(sql, data, response);
};
const update = (request, response) => {
    const { title, description, where } = request.body;
    const sql = "UPDATE `CRM`.`project` SET `title` = ?, `description` = ? WHERE `idproject` = ?;";
    const data = [title, description, where];
    mysqlQuery(sql, data, response);
};
const read = (_request, response) => {
    const sql = "SELECT * FROM `project`";
    mysqlQuery(sql, response);
};
const _delete = (request, response) => {
    const { where } = request.body;
    const sql = "DELETE FROM project WHERE `idproject` = ?";
    const data = [where];
    mysqlQuery(sql, data, response);
};
module.exports = { create, update, read, _delete };