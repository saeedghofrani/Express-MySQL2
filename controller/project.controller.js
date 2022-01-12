const mysqlQuery = require('../modules/query.module.js');
const create = (request, response) => {
    const { title, description } = request.body;
    const sql = "INSERT INTO `CRM`.`project` (`title`, `description`) VALUES ( ?, ?);";
    const data = [title, description];
    mysqlQuery(sql, response, data);
};
const update = (request, response) => {
    const { title, description, where, col } = request.body;
    let sql;
    switch (col) {
        case 'title':
            sql = "UPDATE `CRM`.`project` SET `title` = ?, `description` = ? WHERE `title` = ?;";
            break;
        case 'description':
            sql = "UPDATE `CRM`.`project` SET `title` = ?, `description` = ? WHERE `description` = ?;";
            break;
        case 'idproject':
            sql = "UPDATE `CRM`.`project` SET `title` = ?, `description` = ? WHERE `idproject` = ?;";
            break;
    }
    const data = [title, description, where];
    mysqlQuery(sql, response, data);
};
const read = (_request, response) => {
    const sql = "SELECT * FROM `project`";
    mysqlQuery(sql, response);
};
const _delete = (request, response) => {
    const { where, col } = request.body;
    let sql;
    switch (col) {
        case 'title':
            sql = "DELETE FROM project WHERE `title` = ?";
            break;
        case 'description':
            sql = "DELETE FROM project WHERE `description` = ?";
            break;
        case 'idproject':
            sql = "DELETE FROM project WHERE `idproject` = ?";
            break;
    }
    const data = [where];
    mysqlQuery(sql, response, data);
};
module.exports = { create, update, read, _delete };