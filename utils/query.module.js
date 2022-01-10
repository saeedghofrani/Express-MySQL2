const mysqlCommand = (sql, data = null, errMessage) => {
    global.connection.query(
        sql,
        data,
        (err, results, _fields) => {
            if (err) { return err; }
        }
    );
};
module.exports = mysqlCommand;