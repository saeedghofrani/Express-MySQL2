const mysqlQuery = require('../modules/query.module.js');
const { checkUserticket } = require('../modules/checkUser.module.js');
const read = (request, response) => {
    const { Cid, Mid, Pid } = request.query;
    if ((isNaN(Cid)) || (isNaN(Mid)) || (isNaN(Pid))) {
        return response.status(409).send("url query is invalid");
    }
    const sql = "SELECT * FROM `ticket` WHERE `project_idproject` = ? and `customer_idcustomer` = ? and `manager_idmanager` = ?;";
    const data = [Cid, Mid, Pid];
    mysqlQuery(sql, response, 200, "read", data);
};
const create = (request, response) => {
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    const sql = "select idmanager from crm.manager;";
    global.connection.query(
        sql,
        function (err, results, _fields) {
            if (!!err) return response.status(500).send("server error");
            if (results === 'undefined' || results.length < 0 || results === []) {
                response.status(500).send("there is no manager!");
            }
            const luckyNumber = getRandomInt(results.length);
            const manager_idmanager = results[luckyNumber].idmanager;
            const { title, description, closedAt, createdAt, status, project_idproject, customer_idcustomer } = request.body;
            const sql = "INSERT INTO `CRM`.`ticket` (`title`, `description`, `closedAt`, `createdAt`, `status`, `project_idproject`, `customer_idcustomer`, `manager_idmanager`) VALUES (?, ?, ?, ?, ?, ?, ?, ?);";
            const data = [title, description, closedAt, createdAt, status, project_idproject, customer_idcustomer, manager_idmanager];
            mysqlQuery(sql, response, 201, "create", data);
        }
    );
};
const update = (request, response) => {
    const id = request.params.id;
    if (isNaN(id)) {
        return response.status(409).send("url param is invalid");
    }
    const { title, description, closedAt, createdAt, status, solution, project_idproject, customer_idcustomer, manager_idmanager } = request.body;
    const sql = "UPDATE `crm`.`ticket` SET `title` = ?, `description` = ?, `createdAt` = ?,`closedAt` = ?, `status` = ?, `solution` = ?, `project_idproject` =?, `customer_idcustomer` = ?, `manager_idmanager` = ? WHERE `idticket` = ?;";
    const data = [title, description, closedAt, createdAt, status, solution, project_idproject, customer_idcustomer, manager_idmanager, id];
    (checkUserticket(id)) ? response.status(404).send('wrong id') : mysqlQuery(sql, response, 202, "update", data);
};
const _delete = (request, response) => {
    const id = request.params.id;
    if (isNaN(id)) {
        return response.status(409).send("url param is invalid");
    }
    const sql = "DELETE FROM ticket WHERE `idticket` = ?";
    const data = [id];
    (checkUserticket(id)) ? response.status(404).send('wrong id') : mysqlQuery(sql, response, 202, "delete", data);
};
module.exports = { create, update, read, _delete };