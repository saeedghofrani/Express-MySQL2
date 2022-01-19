const mysqlQuery = require('../modules/query.module.js');
const { checkUserManager } = require('../modules/checkUser.module.js');
const read = (_request, response) => {
    const sql = "SELECT * FROM `manager`";
    mysqlQuery(sql, response, 200, "read");
};
const create = (request, response) => {
    const { name, phoneNumber, natonalCode } = request.body;
    const sql = "INSERT INTO `CRM`.`manager` (`name`, `phoneNumber`, `natonalCode`) VALUES ( ?, ?, ?);";
    const data = [name, phoneNumber, natonalCode];
    mysqlQuery(sql, response, 201, "create", data);
};
const update = (request, response) => {
    const id = request.params.id;
    const { name, phoneNumber, natonalCode } = request.body;
    const sql = "UPDATE `CRM`.`manager` SET `name` = ?, `phoneNumber` = ?, `natonalCode` = ? WHERE `idmanager` = ?;";
    const data = [name, phoneNumber, natonalCode, id];
    (checkUserManager(id)) ? response.status(404).send('wrong id') : mysqlQuery(sql, response, 202, "update", data);
};
const _delete = (request, response) => {
    const id = request.params.id;
    const sql = "DELETE FROM manager WHERE `idmanager` = ?";
    const data = [id];
    (checkUserManager(id)) ? response.status(404).send('wrong id') : mysqlQuery(sql, response, 202, "delete", data);
};
module.exports = { create, update, read, _delete };