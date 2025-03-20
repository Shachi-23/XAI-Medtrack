// db.js
const mysql = require('mysql2');

// Create MySQL connection pool
const pool = mysql.createPool({
    host: 'localhost',       // or your DB host
    user: 'root',            // your MySQL username
    password: 'mysql', // your MySQL password
    database: 'xai_medtrack_db', // your database name
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Export for use in other files
module.exports = pool.promise();
