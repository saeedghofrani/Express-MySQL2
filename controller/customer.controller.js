const mysqlQuery = require('../modules/query.module');
const { checkUserCustomer } = require('../modules/checkUser.module.js');
const read = (_request, response) => {
    const sql = "SELECT * FROM `customer`";
    mysqlQuery(sql, response, 200, "read");
};
const create = (request, response) => {
    const { Ctype, name, income, createdAt, phoneNumber } = request.body;
    const sql = "INSERT INTO `crm`.`customer` (`name`, `Ctype`, `income`, `createdAt`, `phoneNumber`) VALUES (?,?,?,?,?)";
    const data = [name, Ctype, income, createdAt, phoneNumber];
    mysqlQuery(sql, response, 201, "create", data);
};
const update = (request, response) => {
    const id = request.params.id;
    const { Ctype, name, income, phoneNumber } = request.body;
    const sql = "UPDATE `CRM`.`customer` SET `Ctype` = ?, `name` = ?, `income` = ?, `phoneNumber` = ? WHERE `idcustomer` = ?;";
    const data = [Ctype, name, income, phoneNumber, id];
    (checkUserCustomer(id)) ? response.status(404).send('wrong id') : mysqlQuery(sql, response, 202, "update", data);
};
const _delete = (request, response) => {
    const id = request.params.id;
    console.log(request);
    const sql = "DELETE FROM customer WHERE `idcustomer` = ?";
    const data = [id];
    console.log(checkUserCustomer(id));
    (checkUserCustomer(id)) ? response.status(404).send('wrong id') : mysqlQuery(sql, response, 202, "delete", data);
};
module.exports = { create, update, read, _delete };