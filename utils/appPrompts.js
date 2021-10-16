// Employee-tracker prompts

const appPrompts = [
   {
      type: 'list',
      name: 'nextTask',
      message: 'What would you like to do?',
      choices: [
         'View all departments',
         'View all roles',
         'View all employees',
         'Add a department',
         'Add a role',
         'Add an employee',
         'Update an employees role',
         'Exit'
      ],
      loop: false,
      default: 'Add a department',
   },
];
//
module.exports = { appPrompts };
