const db = require('./db/connection');
const inquirer = require('inquirer');
const { appPrompts } = require('./utils/appPrompts');

const PORT = process.env.PORT || 3001;

const selectTask = async () => {
   // presents main menu
   const answers = await inquirer.prompt(appPrompts);

   switch (answers.nextTask) {
      case 'View all departments':
         console.log(`~ answers.nextTask`, answers.nextTask);
         break;
      case 'View all roles':
         console.log(`~ answers.nextTask`, answers.nextTask);
         break;
      case 'View all employees':
         console.log(`~ answers.nextTask`, answers.nextTask);
         break;
      case 'Add a department':
         console.log(`~ answers.nextTask`, answers.nextTask);
         break;
      case 'Add a role':
         console.log(`~ answers.nextTask`, answers.nextTask);
         break;
      case 'Add an employee':
         console.log(`~ answers.nextTask`, answers.nextTask);
         break;
      case 'Update an employees role':
         console.log(`~ answers.nextTask`, answers.nextTask);
         break;
      case 'Exit':
         console.log(`~ answers.nextTask`, answers.nextTask);
         break;
   }

   // are we done? NO-recursive call to selectTask to display main menu : YES-return selected task 'Exit'
   return answers.nextTask !== 'Exit' ? selectTask() : answers.nextTask;
};

const startApp = async () => {
   let nextTask = await selectTask();

   // last instruction
   db.end();
};

startApp();
