const mysqlCommand = (sql, response, status, mod, data = null) => {
    global.connection.query(
        sql,
        data,
        function (err, results, fields) {
            (!!err) ? response.status(500).send({ success: false, err: [err] })
                : (results.affectedRows === 0) ? response.status(404).send({
                    success: false, error: 'no match'
                })
                    : (mod === "read") ? response.status(status).send({
                        success: true, result: { result: results }
                    })
                        : (mod === "create") ? response.status(status).send({
                            success: true, result: { "inserted id": results.insertId }
                        })
                            : response.status(status).send({
                                success: true, result: { effectedRow: results.affectedRows }
                            });
        }
    );
};
module.exports = mysqlCommand;