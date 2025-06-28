const mysql2 = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();
const db = mysql2.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL: ' + err.message);
    } else {
        console.log('Connected to MySQL database');
    }
});

db.on('error', (err) => {
    console.error('Error connecting to MySQL: ' + err.message);
}); 


module.exports = db;