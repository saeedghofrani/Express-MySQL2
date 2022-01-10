const create = (request, response) => {
    const { title, description } = request.body;
    const sql = "INSERT INTO `CRM`.`project` (`title`, `description`) VALUES ( ?, ?);";
    const data = [title, description];
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
    const { title, description, where } = request.body;
    const sql = "UPDATE `CRM`.`project` SET `title` = ?, `description` = ? WHERE `idproject` = ?;";
    const data = [title, description, where];
    global.connection.query(
        sql,
        data,
        function (err, results, _fields) {
            if (!!err) return response.status(500).send(err);
            response.send({ results });
        }
    );
};
const read = (_request, response) => {
    global.connection.query(
        "SELECT * FROM `project`",
        function (err, results, fields) {
            console.log(fields);
            if (!!err) return response.status(500).send("Internal server error.");
            response.send({ results });
        }
    );
};
const _delete = (request, response) => {
    const { where } = request.body;
    const sql = "DELETE FROM project WHERE `idproject` = ?";
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