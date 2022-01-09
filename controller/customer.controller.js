const create = (request, response) => {
    const { type, name, income, createdAt, phoneNumber } = request.body;
    const sql = "INSERT INTO `test`.`customer` (`type`, `name`, `income`, `createdAt`, `phoneNumber`) VALUES (?, ?, ?, ?, ?);";
    const data = [type, name, income, createdAt, phoneNumber];
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
    const { type, name, income, phoneNumber, where } = request.body;
    const sql = "UPDATE `test`.`customer` SET `type` = ?, `name` = ?, `income` = ?, `phoneNumber` = ? WHERE `id` = ?;";
    const data = [type, name, income, phoneNumber, where];
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
        "SELECT * FROM `customer`",
        function (err, results, _fields) {
            if (!!err) return response.status(500).send(err);
            response.send({ results });
        }
    );
};
const _delete = (request, response) => {
    const { where } = request.body;
    const sql = "DELETE FROM customer WHERE `id` = ?";
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