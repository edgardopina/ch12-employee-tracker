const inquirer = require('inquirer');
const { appPrompts, DEPT_INDEX, ROLE_INDEX, MGR_INDEX, displayLists } = require('./utils/appPrompts');
const Department = require('./lib/Department');
const Employee = require('./lib/Employee');
const Role = require('./lib/Role');
const db = require('./db/connection');
const cTable = require('console.table');

const selectTask = async () => {
   // obtain task answer from inquirer prompts and store to answers constant
   const answers = await inquirer.prompt(appPrompts);

   let sql = ``;
   let displayArrayIndex = 0;
   let selectedName = ``;
   let departmentId = 0;
   let roleId = 0;
   let employeeId = 0;
   let managerId = 0;
   switch (answers.nextTask) {
      case 'View all departments':
         sql = `SELECT * FROM departments;`;
         executeQuery(sql, selectedName, displayArrayIndex, answers.nextTask);
         break;
      case 'View all roles':
         sql = `SELECT * FROM roles;`;
         executeQuery(sql, selectedName, displayArrayIndex, answers.nextTask);
         break;
      case 'View all employees':
         sql = `SELECT * FROM employees;`;
         executeQuery(sql, selectedName, displayArrayIndex, answers.nextTask);
         break;
      case 'Add a department':
         displayArrayIndex = DEPT_INDEX;
         sql = `INSERT INTO departments (name)
                  VALUES ('${answers.departmentName}');`;
         executeQuery(sql, answers.departmentName, DEPT_INDEX, answers.nextTask);
         break;
      case 'Add a role':
         departmentId = displayLists[DEPT_INDEX].indexOf(answers.roleDepartmentName) + 1;
         sql = `INSERT INTO roles (title, salary, departmentId)
                  VALUES ('${answers.roleTitle}', '${answers.roleSalary}', '${departmentId}');`;
         executeQuery(sql, answers.roleTitle, ROLE_INDEX, answers.nextTask);
         break;
      case 'Add an employee':
         roleId = displayLists[ROLE_INDEX].indexOf(answers.employeeRoleName) + 1;
         managerId = displayLists[MGR_INDEX6].indexOf(answers.employeeManagerName);
         if (!managerId) {
            sql = `INSERT INTO employees (firstName, lastName, roleId, managerId)
               VALUES ('${answers.employeeFirstName}', '${answers.employeeLastName}', '${roleId}', NULL);`;
         } else {
            sql = `INSERT INTO employees (firstName, lastName, roleId, managerId)
               VALUES ('${answers.employeeFirstName}', '${answers.employeeLastName}', '${roleId}', '${managerId}');`;
         }
         executeQuery(sql, answers.employeeFirstName + ' ' + answers.employeeLastName, MGR_INDEX, answers.nextTask);
         break;
      case 'Update an employee role':
         employeeId = displayLists[MGR_INDEX].indexOf(answers.updateEmpName);
         roleId = displayLists[ROLE_INDEX].indexOf(answers.updateRoleName) + 1;
         sql = `UPDATE employees SET roleId = ${roleId} WHERE id = ${employeeId};`;
         executeQuery(sql, answers.employeeFirstName + ' ' + answers.employeeLastName, MGR_INDEX, answers.nextTask);
         break;
      case 'Exit':
         db.end();
         return;
         break;
   }
};

const startApp = async () => {
   db.connect(err => {
      if (err) throw err;
      selectTask();
   });
};

startApp();
function executeQuery(sql, selectedName, displayArrayIndex, header) {
   db.query(sql, (err, rows) => {
      if (err) throw err;
      if (selectedName) {
         displayLists[displayArrayIndex].push(selectedName);
      }
      console.log(`\n ${header}\n`);
      console.table(rows);

      selectTask();
   });
}
