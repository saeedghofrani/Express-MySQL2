const create = (request, response) => {
    const { title, description, closedAt, createdAt, status, project_idproject, customer_idcustomer, manager_idmanager } = request.body;
    const sql = "INSERT INTO `CRM`.`ticket` (`title`, `description`, `closedAt`, `createdAt`, `status`, `project_idproject`, `customer_idcustomer`, `manager_idmanager`) VALUES (?, ?, ?, ?, ?, ?, ?, ?);";
    const data = [title, description, closedAt, createdAt, status, project_idproject, customer_idcustomer, manager_idmanager];
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
    const { title, description, closedAt, createdAt, status, solution, project_idproject, customer_idcustomer, manager_idmanager, where } = request.body;
    const sql = "UPDATE `crm`.`ticket` SET `title` = ?, `description` = ?, `createdAt` = ?,`closedAt` = ?, `status` = ?, `solution` = ?, `project_idproject` =?, `customer_idcustomer` = ?, `manager_idmanager` = ? WHERE `idticket` = ?;";
    const data = [title, description, closedAt, createdAt, status, solution, project_idproject, customer_idcustomer, manager_idmanager, where];
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
        "SELECT * FROM `ticket`",
        function (err, results, fields) {
            console.log(fields);
            if (!!err) return res.status(500).send("Internal server error.");
            response.send({ results });
        }
    );
};
const _delete = (request, response) => {
    const { where } = request.body;
    const sql = "DELETE FROM ticket WHERE `idticket` = ?";
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