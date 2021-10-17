// Employee-tracker prompts

const menu = [
   'View all departments',
   'View all roles',
   'View all employees',
   'Add a department',
   'Add a role',
   'Add an employee',
   'Update an employees role',
   'Exit'
];

const employeesList = ['none'];

const appPrompts = [
   {
      type: 'list',
      name: 'nextTask',
      message: 'What would you like to do?',
      choices: menu,
      loop: false,
      default: 'Add a department',
   },
   {
      when: (answers) => answers.nextTask === 'Add a department',
      type: 'input',
      name: 'departmentName',
      message: "Enter department name (Required): ",
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
      message: "Enter the role's salary (Required): ",
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
      name: 'roleDepartmentId',
      message: "Enter the role's department Id (Required): ",
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
      name: 'firstName',
      message: "Enter first name (Required): ",
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
      name: 'lastName',
      message: "Enter last name (Required): ",
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
      type: 'number',
      name: 'employeeRoleId',
      message: "Enter role Id (Required): ",
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
      type: 'number',
      name: 'managerId',
      message: "Enter manager's id (Required): ",
      // choices: employeesList,
      validate: (notEmpty) => {
         if (notEmpty) {
            return true;
         } else {
            return false;
         }
      },
   },
];
//
module.exports = { appPrompts, employeesList };
