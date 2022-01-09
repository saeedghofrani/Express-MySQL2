const mysql = require("mysql2");
const config = require("../config/config.json");
async function connection() {
    try {
        const { host, user, database, password } = config[0].database;
        const connection = mysql.createConnection({
            host: host,
            user: user,
            database: database,
            password: password,
        });
        return connection;
    } catch (error) {
        console.log('connection has lost' + error);
        process.exit(1);
    }
}
module.exports = connection;