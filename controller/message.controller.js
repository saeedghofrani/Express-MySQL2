const create = (request, response) => {
    const { sender, body, createdAt, ticket_idticket } = request.body;
    const sql = "INSERT INTO `crm`.`message` (`sender`, `body`, `createdAt`, `ticket_idticket`) VALUES (?, ?, ?, ?);";
    const data = [sender, body, createdAt, ticket_idticket];
    global.connection.query(
        sql,
        data,
        function (err, results, _fields) {
            if (!!err) return response.status(500).send("correct your inputs" + err);
            response.send({ results });
        }
    );
};
const update = (request, response) => {
    const { sender, body, createdAt, ticket_idticket, where } = request.body;
    const sql = "UPDATE `crm`.`message` SET `sender` = ?, `body` = ?, `createdAt` = ?, `ticket_idticket` = ? WHERE `idmessage` = ?;";
    const data = [sender, body, createdAt, ticket_idticket, where];
    global.connection.query(
        sql,
        data,
        function (err, results, _fields) {
            if (!!err) return response.status(500).send(err);
            response.send({ results });
        }
    );

};
const read = (request, response) => {
    global.connection.query(
        "SELECT * FROM `message`",
        function (err, results, fields) {
            console.log(fields);
            if (!!err) return res.status(500).send("Internal server error.");
            response.send({ results });
        }
    );
};
const _delete = (request, response) => {
    const { where } = request.body;
    const sql = "DELETE FROM message WHERE `idmessage` = ?";
    const data = [where];
    global.connection.query(
        sql,
        data,
        function (err, results, _fields) {
            if (!!err) return response.status(500).send(err);
            response.send({ results });
        }
    );
};
module.exports = { create, update, read, _delete };