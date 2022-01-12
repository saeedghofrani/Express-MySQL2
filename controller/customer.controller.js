const mysqlQuery = require('../modules/query.module.js');
const create = (request, response) => {
    const { Ctype, name, income, createdAt, phoneNumber } = request.body;
    const sql = "INSERT INTO `CRM`.`customer` (`Ctype`, `name`, `income`, `createdAt`, `phoneNumber`) VALUES (?, ?, ?, ?, ?);";
    const data = [Ctype, name, income, createdAt, phoneNumber];
    mysqlQuery(sql, response, data);
};
const update = (request, response) => {
    const { Ctype, name, income, phoneNumber, where } = request.body;
    console.log(Ctype, name, income, phoneNumber, where);
    const sql = "UPDATE `CRM`.`customer` SET `Ctype` = ?, `name` = ?, `income` = ?, `phoneNumber` = ? WHERE `idcustomer` = ?;";
    const data = [Ctype, name, income, phoneNumber, where];
    mysqlQuery(sql, response, data);
};
const read = (_request, response) => {
    const sql = "SELECT * FROM `customer`";
    mysqlQuery(sql, response);
};
const _delete = (request, response) => {
    const { where } = request.body;
    const sql = "DELETE FROM customer WHERE `idcustomer` = ?";
    const data = [where];
    mysqlQuery(sql, response, data);
};
module.exports = { create, update, read, _delete };