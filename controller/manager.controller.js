const create = (request, response) => {
    const { name, phoneNumber, nationalCode } = request.body;
    const sql = "INSERT INTO `test`.`manager` (`name`, `phoneNumber`, `nationalCode`) VALUES ( ?, ?, ?);";
    const data = [name, phoneNumber, nationalCode];
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
    const { name, phoneNumber, nationalCode, where } = request.body;
    const sql = "UPDATE `test`.`manager` SET `name` = ?, `phoneNumber` = ?, `nationalCode` = ? WHERE `id` = ?;";
    const data = [name, phoneNumber, nationalCode, where];
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
        "SELECT * FROM `manager`",
        function (err, results, fields) {
            console.log(fields);
            if (!!err) return response.status(500).send("Internal server error.");
            response.send({ results });
        }
    );
};
const _delete = (request, response) => {
    const { where } = request.body;
    const sql = "DELETE FROM manager WHERE `id` = ?";
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