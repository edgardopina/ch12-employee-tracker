const mysql = require('mysql2');

// Connect to the database
const db = mysql.createConnection(
   {
      host: 'localhost',
      user: 'root',
      password: 'MyGoofyStrongPassword09()',
      database: 'employee_tracker',
   },
   console.log('Connected to the employee_tracker database.')
);

module.exports = db;
