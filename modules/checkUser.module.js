const checkUserCustomer = (id) => {
    global.connection.query(
        'SELECT * FROM `customer` WHERE `idcustomer` = ?',
        [id],
        function (err, results, _fields) { (!!err) ? false : true; }
    );
};
const checkUserManager = (id) => {
    global.connection.query(
        'SELECT * FROM `manager` WHERE `idmanager` = ?',
        [id],
        function (err, results, _fields) { (!!err) ? false : true; }
    );
};
const checkUserproject = (id) => {
    global.connection.query(
        'SELECT * FROM `project` WHERE `idproject` = ?',
        [id],
        function (err, results, _fields) { (!!err) ? false : true; }
    );
};
const checkUserticket = (id) => {
    global.connection.query(
        'SELECT * FROM `ticket` WHERE `idticket` = ?',
        [id],
        function (err, results, _fields) { (!!err) ? false : true; }
    );
};
const checkUsermessage = (id) => {
    global.connection.query(
        'SELECT * FROM `message` WHERE `idticket` = ?',
        [id],
        function (err, results, _fields) { (!!err) ? false : true; }
    );
};
module.exports = { checkUserCustomer, checkUserManager, checkUserproject, checkUserticket, checkUsermessage };