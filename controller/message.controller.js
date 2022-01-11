const mysqlQuery = require('../modules/query.module.js');
const create = (request, response) => {
    const { sender, body, createdAt, ticket_idticket } = request.body;
    const sql = "INSERT INTO `crm`.`message` (`sender`, `body`, `createdAt`, `ticket_idticket`) VALUES (?, ?, ?, ?);";
    const data = [sender, body, createdAt, ticket_idticket];
    mysqlQuery(sql, data, response);
};
const update = (request, response) => {
    const { sender, body, createdAt, ticket_idticket, where } = request.body;
    const sql = "UPDATE `crm`.`message` SET `sender` = ?, `body` = ?, `createdAt` = ?, `ticket_idticket` = ? WHERE `idmessage` = ?;";
    const data = [sender, body, createdAt, ticket_idticket, where];
    mysqlQuery(sql, data, response);
};
const read = (request, response) => {
    const sql = "SELECT * FROM `message`"
    mysqlQuery(sql, response);
};
const _delete = (request, response) => {
    const { where } = request.body;
    const sql = "DELETE FROM message WHERE `idmessage` = ?";
    const data = [where];
    mysqlQuery(sql, data, response);
};
module.exports = { create, update, read, _delete };