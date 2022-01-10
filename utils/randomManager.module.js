const randomManager = () => {
    const sql = "select idmanager from crm.manager;";
    // const data = [title, description, closedAt, createdAt, status, project_idproject, customer_idcustomer, manager_idmanager];
    global.connection.query(
        sql,
        // data,
        function (err, results, _fields) {
            if (!!err) return console.log(err);
            console.log(results);
        }
    );
};
randomManager();
module.exports = randomManager;