const create = (request, response) => {
    const { name, phoneNumber, natonalCode } = request.body;
    const sql = "INSERT INTO `CRM`.`manager` (`name`, `phoneNumber`, `natonalCode`) VALUES ( ?, ?, ?);";
    const data = [name, phoneNumber, natonalCode];
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
    const { name, phoneNumber, natonalCode, where } = request.body;
    const sql = "UPDATE `CRM`.`manager` SET `name` = ?, `phoneNumber` = ?, `natonalCode` = ? WHERE `idmanager` = ?;";
    const data = [name, phoneNumber, natonalCode, where];
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
    const sql = "SELECT * FROM `manager`";
    global.connection.query(
        sql,
        function (err, results, fields) {
            console.log(fields);
            if (!!err) return response.status(500).send("Internal server error.");
            response.send({ results });
        }
    );
};
const _delete = (request, response) => {
    const { where } = request.body;
    const sql = "DELETE FROM manager WHERE `idmanager` = ?";
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