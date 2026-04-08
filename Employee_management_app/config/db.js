const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Root123$',
    database: 'Employee_db'
});

module.exports = pool.promise();