var inquirer = require('inquirer');

inquirer
  .prompt([
    /* Pass your questions in here */
    {
        type: 'input',
        message: 'What is your trainer name?',
        name: 'trainerName'
    },
    {
        type:'password',
        message: 'Password:',
        name: 'trainerPassword'
    },
    {
        type: 'list',
        message: 'Choose your first import: ',
        choices: ['Skyline', 'Supra', 'NSX', 'RX-7'],
        name: 'trainerChoice'
    },
    {
        type: 'confirm',
        message: 'Are you sure?',
        default: 'true',
        name: 'trainerConfirm'
    }
  ])
  .then(answers => {
    // Use user feedback for... whatever!!
    if (answers.trainerConfirm === true){
        console.log(`Hello ${answers.trainerName}, your ${answers.trainerChoice} is ready for shipment`);
    } else {
        console.log(`That's okay ${answers.trainerName} come back whenever!`);
    }
  })
  .catch(error => {
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  });