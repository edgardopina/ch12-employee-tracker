// Employee-tracker prompts
const tasks = [
   'View all departments',
   'View all roles',
   'View all employees',
   'Add a department',
   'Add a role',
   'Add an employee',
   'Update an employees role',
   'Exit'
];

const nextTask = [
   {
      type: 'list',
      name: 'task',
      message: 'What would you like to do?',
      choices: tasks,
      loop: true,
      default: 'Add a department',
   },
];
//
module.exports = { nextTask };
