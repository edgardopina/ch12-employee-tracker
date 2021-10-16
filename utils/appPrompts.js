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
