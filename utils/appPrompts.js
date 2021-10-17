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

const managerList = ['none'];

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
      
   

   // {
   //    type: 'list',
   //    name: 'manager',
   //    message: 'Who is the manager?',
   //    choices: managerList,
   //    loop: false,
   //    default: 'Add a department',
   // }
];
//
module.exports = { appPrompts };
