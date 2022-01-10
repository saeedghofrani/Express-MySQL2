const create = (request, response) => {
    const { Ctype, name, income, createdAt, phoneNumber } = request.body;
    const sql = "INSERT INTO `CRM`.`customer` (`Ctype`, `name`, `income`, `createdAt`, `phoneNumber`) VALUES (?, ?, ?, ?, ?);";
    const data = [Ctype, name, income, createdAt, phoneNumber];
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
    const { Ctype, name, income, phoneNumber, where } = request.body;
    const sql = "UPDATE `CRM`.`customer` SET `Ctype` = ?, `name` = ?, `income` = ?, `phoneNumber` = ? WHERE `idcustomer` = ?;";
    const data = [Ctype, name, income, phoneNumber, where];
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
    const sql = "SELECT * FROM `customer`";
    global.connection.query(
        sql,
        function (err, results, _fields) {
            if (!!err) return response.status(500).send(err);
            response.send({ results });
        }
    );
};
const _delete = (request, response) => {
    const { where } = request.body;
    const sql = "DELETE FROM customer WHERE `idcustomer` = ?";
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