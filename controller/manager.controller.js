const mysqlQuery = require('../modules/query.module.js');
const create = (request, response) => {
    const { name, phoneNumber, natonalCode } = request.body;
    const sql = "INSERT INTO `CRM`.`manager` (`name`, `phoneNumber`, `natonalCode`) VALUES ( ?, ?, ?);";
    const data = [name, phoneNumber, natonalCode];
    mysqlQuery(sql, response, data);
};
const update = (request, response) => {
    const { name, phoneNumber, natonalCode, where, col } = request.body;
    let sql;
    switch (col) {
        case 'name':
            sql = "UPDATE `CRM`.`manager` SET `name` = ?, `phoneNumber` = ?, `natonalCode` = ? WHERE `name` = ?;";
            break;
        case 'phoneNumber':
            sql = "UPDATE `CRM`.`manager` SET `name` = ?, `phoneNumber` = ?, `natonalCode` = ? WHERE `phoneNumber` = ?;";
            break;
        case 'natonalCode':
            sql = "UPDATE `CRM`.`manager` SET `name` = ?, `phoneNumber` = ?, `natonalCode` = ? WHERE `natonalCode` = ?;";
            break;
        case 'idmanager':
            sql = "UPDATE `CRM`.`manager` SET `name` = ?, `phoneNumber` = ?, `natonalCode` = ? WHERE `idmanager` = ?;";
            break;
    }
    const data = [name, phoneNumber, natonalCode, where];
    mysqlQuery(sql, response, data);
};
const read = (_request, response) => {
    const sql = "SELECT * FROM `manager`";
    mysqlQuery(sql, response);
};
const _delete = (request, response) => {
    const { where, col } = request.body;
    let sql;
    switch (col) {
        case 'name':
            sql = "DELETE FROM manager WHERE `name` = ?";
            break;
        case 'phoneNumber':
            sql = "DELETE FROM manager WHERE `phoneNumber` = ?";
            break;
        case 'natonalCode':
            sql = "DELETE FROM manager WHERE `natonalCode` = ?";
            break;
        case 'idmanager':
            sql = "DELETE FROM manager WHERE `idmanager` = ?";
            break;
    }
    const data = [where];
    mysqlQuery(sql, response, data);
};
module.exports = { create, update, read, _delete };