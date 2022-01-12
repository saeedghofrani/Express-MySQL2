const mysqlQuery = require('../modules/query.module.js');
const create = (request, response) => {
    const { Ctype, name, income, createdAt, phoneNumber } = request.body;
    const sql = "INSERT INTO `CRM`.`customer` (`Ctype`, `name`, `income`, `createdAt`, `phoneNumber`) VALUES (?, ?, ?, ?, ?);";
    const data = [Ctype, name, income, createdAt, phoneNumber];
    mysqlQuery(sql, response, data);
};
const update = (request, response) => {
    const { Ctype, name, income, phoneNumber, where, col } = request.body;
    let sql;
    switch (col) {
        case 'Ctype':
            sql = "UPDATE `CRM`.`customer` SET `Ctype` = ?, `name` = ?, `income` = ?, `phoneNumber` = ? WHERE `Ctype` = ?;";
            break;
        case 'name':
            sql = "UPDATE `CRM`.`customer` SET `Ctype` = ?, `name` = ?, `income` = ?, `phoneNumber` = ? WHERE `name` = ?;";
            break;
        case 'income':
            sql = "UPDATE `CRM`.`customer` SET `Ctype` = ?, `name` = ?, `income` = ?, `phoneNumber` = ? WHERE `income` = ?;";
            break;
        case 'phoneNumber':
            sql = "UPDATE `CRM`.`customer` SET `Ctype` = ?, `name` = ?, `income` = ?, `phoneNumber` = ? WHERE `phoneNumber` = ?;";
            break;
        case 'idcustomer':
            sql = "UPDATE `CRM`.`customer` SET `Ctype` = ?, `name` = ?, `income` = ?, `phoneNumber` = ? WHERE `idcustomer` = ?;";
            break;
    }
    console.log(Ctype, name, income, phoneNumber, where);
    const data = [Ctype, name, income, phoneNumber, where];
    mysqlQuery(sql, response, data);
};
const read = (_request, response) => {
    const sql = "SELECT * FROM `customer`";
    mysqlQuery(sql, response);
};
const _delete = (request, response) => {
    const { where, col } = request.body;
    let sql;
    switch (col) {
        case 'Ctype':
            sql = "DELETE FROM customer WHERE `Ctype` = ?";
            break;
        case 'name':
            sql = "DELETE FROM customer WHERE `name` = ?";
            break;
        case 'income':
            sql = "DELETE FROM customer WHERE `income` = ?";
            break;
        case 'phoneNumber':
            sql = "DELETE FROM customer WHERE `phoneNumber` = ?";
            break;
        case 'idcustomer':
            sql = "DELETE FROM customer WHERE `idcustomer` = ?";
            break;
    }
    const data = [where];
    mysqlQuery(sql, response, data);
};
module.exports = { create, update, read, _delete };