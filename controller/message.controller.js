const mysqlQuery = require('../modules/query.module.js');
const create = (request, response) => {
    const { sender, body, createdAt, ticket_idticket } = request.body;
    const sql = "INSERT INTO `crm`.`message` (`sender`, `body`, `createdAt`, `ticket_idticket`) VALUES (?, ?, ?, ?);";
    const data = [sender, body, createdAt, ticket_idticket];
    mysqlQuery(sql, response, data);
};
const update = (request, response) => {
    const { sender, body, createdAt, ticket_idticket, where, col } = request.body;
    let sql;
    switch (col) {
        case 'sender':
            sql = "UPDATE `crm`.`message` SET `sender` = ?, `body` = ?, `createdAt` = ?, `ticket_idticket` = ? WHERE `sender` = ?;";
            break;
        case 'body':
            sql = "UPDATE `crm`.`message` SET `sender` = ?, `body` = ?, `createdAt` = ?, `ticket_idticket` = ? WHERE `body` = ?;";
            break;
        case 'createdAt':
            sql = "UPDATE `crm`.`message` SET `sender` = ?, `body` = ?, `createdAt` = ?, `ticket_idticket` = ? WHERE `createdAt` = ?;";
            break;
        case 'ticket_idticket':
            sql = "UPDATE `crm`.`message` SET `sender` = ?, `body` = ?, `createdAt` = ?, `ticket_idticket` = ? WHERE `ticket_idticket` = ?;";
            break;
        case 'idcustomer':
            sql = "UPDATE `crm`.`message` SET `sender` = ?, `body` = ?, `createdAt` = ?, `ticket_idticket` = ? WHERE `idmessage` = ?;";
            break;
    }
    const data = [sender, body, createdAt, ticket_idticket, where];
    mysqlQuery(sql, response, data);
};
const read = (request, response) => {
    const sql = "SELECT * FROM `message`";
    mysqlQuery(sql, response);
};
const _delete = (request, response) => {
    const { where, col } = request.body;
    let sql;
    switch (col) {
        case 'sender':
            sql = "DELETE FROM message WHERE `sender` = ?";
            break;
        case 'body':
            sql = "DELETE FROM message WHERE `body` = ?";
            break;
        case 'createdAt':
            sql = "DELETE FROM message WHERE `createdAt` = ?";
            break;
        case 'ticket_idticket':
            sql = "DELETE FROM message WHERE `ticket_idticket` = ?";
            break;
        case 'idmessage':
            sql = "DELETE FROM message WHERE `idmessage` = ?";
            break;
    }
    const data = [where];
    mysqlQuery(sql, response, data);
};
module.exports = { create, update, read, _delete };