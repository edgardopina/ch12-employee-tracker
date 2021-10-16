const inquirer = require('inquirer');
const { appPrompts } = require('./utils/appPrompts');
const Department = require('./lib/Department');
const Employee = require('./lib/Employee');
const Role = require('./lib/Role');
const db = require('./db/connection');
const cTable = require('console.table');

const selectTask = async () => {
   // obtain task answer from inquirer prompts and store to answers constant
   const answers = await inquirer.prompt(appPrompts);

   let sql = ``;
   switch (answers.nextTask) {
      case 'View all departments':
         sql = `SELECT * FROM departments`;
         break;
      case 'View all roles':
         sql = `SELECT * FROM roles`;
         break;
      case 'View all employees':
         sql = `SELECT * FROM employees`;
         break;
      case 'Add a department':
         sql = `INSERT INTO departments (name) VALUES ('${answers.departmentName}')`;
         break;
      case 'Add a role':
         console.log(`~ answers.nextTask`, answers.nextTask);
         break;
      case 'Add an employee':
         console.log(`~ answers.nextTask`, answers.nextTask);
         break;
      case 'Update an employee role':
         console.log(`~ answers.nextTask`, answers.nextTask);
         break;
      case 'Exit':
         console.log(`~ answers.nextTask`, answers.nextTask);
         db.end();
         return;
         break;
   }

   db.query(sql, (err, rows) => {
      if (err) throw err;
      console.log(`\n ${answers.nextTask}\n`);
      console.table(rows);
      selectTask();
   });
};

const startApp = async () => {
   db.connect(err => {
      if (err) throw err;
      selectTask();
   });
};

startApp();
