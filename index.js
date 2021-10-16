const db = require('./db/connection');
const inquirer = require('inquirer');
const { nextTask } = require('./utils/trakerPrompts');

const PORT = process.env.PORT || 3001;


const selectTask = async () => {
   // presents main menu
   const answers = await inquirer.prompt(nextTask);
   
   console.log(`~ answers`, answers);

   // are we done? NO-recursive call to selectTask to display main menu : YES-return selected task 'Exit'
   return answers.task !== 'Exit' ? selectTask() : answers.task;
}

const runApp = async () => {
   /* TEST ***************************/
   let respSelectedTask = await selectTask();
   console.log(`end runAPP`, respSelectedTask);

   // last instruction
   db.end();
};

runApp();
