// Declare classes and variables
const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Square, Triangle } = require('./shape');
// Questions for user choice shape and color
const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'Enter text for the logo (up to 3 characters):',
    validate: text => {
      if (text.length > 3) {
        return 'Text must be up to 3 characters only';
      }
      return true;
    }
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter text color:',

  },
  {
    type: 'list',
    name: 'shape',
    message: 'Select a shape for the logo:',
    choices: ['Circle', 'Square', 'Triangle']
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter shape color:',
 
  }
];
//Writes logo.svg file after choices submitted
inquirer.prompt(questions).then(answers => {
  const { text, textColor, shape, shapeColor } = answers;
  const logo = generateLogo(text, textColor, shape, shapeColor);
  fs.writeFile('./logo.svg', logo, err => {
    if (err) {
      console.log('Error writing file:', err);
    } else {
      console.log('Logo created successfully!');
    }
  });
});

//function generates logo after user inputs choices.
function generateLogo(text, textColor, shape, shapeColor) {
  let shapeSvg;
  switch (shape) {
    case 'Circle':
      shapeSvg = new Circle();
      break;
    case 'Square':
      shapeSvg = new Square();
      break;
    case 'Triangle':
      shapeSvg = new Triangle();
      break;
  }
  shapeSvg.colorChoice(shapeColor)
  return `<svg width="310" height="325" xmlns="http://www.w3.org/2000/svg">
    ${shapeSvg.render()}
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-size="70">${text}</text>
  </svg>`;
}
