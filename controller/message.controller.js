const mysqlQuery = require('../modules/query.module.js');
const { checkUsermessage } = require('../modules/checkUser.module.js');
const read = (_request, response) => {
    const sql = "SELECT * FROM `message`";
    mysqlQuery(sql, response, 200, "read");
};
const create = (request, response) => {
    const { sender, body, createdAt, ticket_idticket } = request.body;
    const sql = "INSERT INTO `crm`.`message` (`sender`, `body`, `createdAt`, `ticket_idticket`) VALUES (?, ?, ?, ?);";
    const data = [sender, body, createdAt, ticket_idticket];
    mysqlQuery(sql, response, 201, "create", data);
};
const update = (request, response) => {
    const id = request.params.id;
    if (isNaN(id)) {
        return response.status(409).send("url param is invalid");
    }
    const { sender, body, createdAt, ticket_idticket } = request.body;
    const sql = "UPDATE `crm`.`message` SET `sender` = ?, `body` = ?, `createdAt` = ?, `ticket_idticket` = ? WHERE `idmessage` = ?;";
    const data = [sender, body, createdAt, ticket_idticket, id];
    (checkUsermessage(id)) ? response.status(404).send('wrong id') : mysqlQuery(sql, response, 202, "update", data);
};
const _delete = (request, response) => {
    const id = request.params.id;
    if (isNaN(id)) {
        return response.status(409).send("url param is invalid");
    }
    const sql = "DELETE FROM message WHERE `idmessage` = ?";
    const data = [id];
    (checkUsermessage(id)) ? response.status(404).send('wrong id') : mysqlQuery(sql, response, 202, "delete", data);
};
module.exports = { create, update, read, _delete };