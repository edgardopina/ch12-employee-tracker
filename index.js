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
         sql = `SELECT * FROM departments;`;
         break;
      case 'View all roles':
         sql = `SELECT * FROM roles;`;
         break;
      case 'View all employees':
         sql = `SELECT * FROM employees;`;
         break;
      case 'Add a department':
         sql = `INSERT INTO departments (name) VALUES ('${answers.departmentName}');`;
         break;
      case 'Add a role':
         sql = `INSERT INTO roles (title, salary, departmentId) 
                  VALUES ('${answers.roleTitle}', '${answers.roleSalary}', '${answers.roleDepartmentId}');`;
         break;
      case 'Add an employee':
         // let managerId = employeesList.indexof(answers.managerId)
         sql = `INSERT INTO employees (firstName, lastName, roleId, managerId) 
                  VALUES ('${answers.firstName}', '${answers.lastName}', '${answers.employeeRoleId}', '${answers.managerId}');`;
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
   return;
};

const startApp = async () => {
   db.connect(err => {
      if (err) throw err;
      selectTask();
   });
};

startApp();
