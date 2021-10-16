const mysql = require('mysql2');

const db = mysql.createConnection(
   {
      host: 'localhost',
      user: 'root', // Your MySQL username,
      password: 'MyGoofyStrongPassword09()', // Your MySQL password
      database: 'employee_tracker',
   },
   console.log(`Created connection to the 'employee_tracker' database`)
);

module.exports = db;
