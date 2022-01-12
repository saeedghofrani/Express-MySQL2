const mysqlQuery = require('../modules/query.module.js');
const create = (request, response) => {
    const { name, phoneNumber, natonalCode } = request.body;
    const sql = "INSERT INTO `CRM`.`manager` (`name`, `phoneNumber`, `natonalCode`) VALUES ( ?, ?, ?);";
    const data = [name, phoneNumber, natonalCode];
    mysqlQuery(sql, response, data);
};
const update = (request, response) => {
    const { name, phoneNumber, natonalCode, where } = request.body;
    const sql = "UPDATE `CRM`.`manager` SET `name` = ?, `phoneNumber` = ?, `natonalCode` = ? WHERE `idmanager` = ?;";
    const data = [name, phoneNumber, natonalCode, where];
    mysqlQuery(sql, response, data);
};
const read = (_request, response) => {
    const sql = "SELECT * FROM `manager`";
    mysqlQuery(sql, response);
};
const _delete = (request, response) => {
    const { where } = request.body;
    const sql = "DELETE FROM manager WHERE `idmanager` = ?";
    const data = [where];
    mysqlQuery(sql, response, data);
};
module.exports = { create, update, read, _delete };