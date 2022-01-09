const create = (request, response) => {

};
const update = (request, response) => {

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

};
module.exports = { create, update, read, _delete };