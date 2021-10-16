const db = require('./db/connection');
const inquirer = require('inquirer');
const { nextTask } = require('./utils/trakerPrompts');

const PORT = process.env.PORT || 3001;

async function selectTask() {
   return await inquirer.prompt(nextTask);
}

const runApp = async () => {
   const respSelectedTask = await selectTask();
   console.log(`end runAPP`, respSelectedTask);

   // last instruction
   db.end();
};

runApp();
