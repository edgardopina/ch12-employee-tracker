// Employee-tracker prompts
const tasks = [
   'Finish',
   'View all departments',
   'View all roles',
   'View all employees',
   'Add a department',
   'Add a role',
   'Add an employee',
   'Update an employees role',
];

const nextTask = [
   {
      type: 'list',
      name: 'task',
      message: 'What would you like to do?',
      choices: tasks,
      loop: true,
      default: 'View all departments',
   },
];
//
module.exports = { nextTask };
