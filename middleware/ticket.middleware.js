const ticketValidation = (request, response, next) => {
    const { status, title, description, closedAt, createdAt, solution, pcmId } = request.body;
    const sql = "INSERT INTO `test`.`ticket` (`id`, `status`, `title`, `description`, `closedAt`, `createdAt`, `pcmId`) VALUES (?, ?, ?, ?, ?, ?, ?);";
    const data = [status, title, description, closedAt, createdAt, solution, pcmId];
    global.connection.query(
        sql,
        data,
        function (err, results, _fields) {
            if (!!err) return response.status(500).send("correct your inputs" + err);
            response.send({ results });
        }
    );
};
module.exports = ticketValidation;