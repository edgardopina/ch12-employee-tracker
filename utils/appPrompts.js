//
const DEPT_INDEX = 0; // index of 0 to array of Department options
const ROLE_INDEX = 1; // index of 1 to array of Roles options
const MGR_INDEX = 2; // index of 2 to array of Manager's options

// Array of arrays, of display options
// const displayLists = [[], [], ['none']];
const displayLists = [['d1','d2','d3','d4','d5'], ['r1','r2','r3','r4','r6'], ['none','e1 e11', 'e2 e22', 'e3 e33', 'e4 e44', 'e5 e55', 'e6 e66']];

// Inquirer questions for ToDo's
const appPrompts = [
   {
      type: 'rawlist',
      name: 'nextTask',
      message: 'What do you want to do? ',
      choices: [
         'View all departments',
         'View all roles',
         'View all employees',
         'Add a department',
         'Add a role',
         'Add an employee',
         'Update an employee role',
         'Exit',
      ],
      loop: false,
      default: 'Add a department',
   },
   {
      when: (answers) => answers.nextTask === 'Add a department',
      type: 'input',
      name: 'departmentName',
      message: "Enter the department's name (Required): ",
      validate: (notEmpty) => {
         if (notEmpty) {
            return true;
         } else {
            return false;
         }
      },
   },
   {
      when: (answers) => answers.nextTask === 'Add a role',
      type: 'input',
      name: 'roleTitle',
      message: "Enter the new role's title (Required): ",
      validate: (notEmpty) => {
         if (notEmpty) {
            return true;
         } else {
            return false;
         }
      },
   },
   {
      when: (answers) => answers.nextTask === 'Add a role',
      type: 'number',
      name: 'roleSalary',
      message: "Enter the new role's salary (Required): ",
      validate: (notEmpty) => {
         if (notEmpty) {
            return true;
         } else {
            return false;
         }
      },
   },
   {
      when: (answers) => answers.nextTask === 'Add a role',
      type: 'list',
      name: 'roleDepartmentName',
      message: "Select the role's deparment that this role belongs to. (Required): ",
      choices: displayLists[DEPT_INDEX],
      validate: (notEmpty) => {
         if (notEmpty) {
            return true;
         } else {
            return false;
         }
      },
   },
   {
      when: (answers) => answers.nextTask === 'Add an employee',
      type: 'input',
      name: 'employeeFirstName',
      message: "Enter the new employee's first name. (Required): ",
      validate: (notEmpty) => {
         if (notEmpty) {
            return true;
         } else {
            return false;
         }
      },
   },
   {
      when: (answers) => answers.nextTask === 'Add an employee',
      type: 'input',
      name: 'employeeLastName',
      message: "Enter the new employee's last name. (Required): ",
      validate: (notEmpty) => {
         if (notEmpty) {
            return true;
         } else {
            return false;
         }
      },
   },
   {
      when: (answers) => answers.nextTask === 'Add an employee',
      type: 'list',
      name: 'employeeRoleName',
      message: "Select the new employee's role. (Required): ",
      choices: displayLists[ROLE_INDEX],
      validate: (notEmpty) => {
         if (notEmpty) {
            return true;
         } else {
            return false;
         }
      },
   },
   {
      when: (answers) => answers.nextTask === 'Add an employee',
      type: 'list',
      name: 'employeeManagerName',
      message: "Select the new employee's Manager. (Required): ",
      choices: displayLists[MGR_INDEX],
      validate: (notEmpty) => {
         if (notEmpty) {
            return true;
         } else {
            return false;
         }
      },
   },
   {
      when: (answers) => answers.nextTask === 'Update an employee role',
      type: 'list',
      name: 'updateEmpName',
      message: "Select the employee to update. (Required): ",
      choices: displayLists[MGR_INDEX],
      validate: (notEmpty) => {
         if (notEmpty) {
            return true;
         } else {
            return false;
         }
      },
   },
   {
      when: (answers) => answers.nextTask === 'Update an employee role',
      type: 'list',
      name: 'updateRoleName',
      message: "Select the employee's new role. (Required): ",
      choices: displayLists[ROLE_INDEX],
      validate: (notEmpty) => {
         if (notEmpty) {
            return true;
         } else {
            return false;
         }
      },
   },
];

module.exports = { appPrompts, DEPT_INDEX, ROLE_INDEX, MGR_INDEX, displayLists };
