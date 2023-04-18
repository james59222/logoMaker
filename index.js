// need class to capture text and the shape render
const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Square, Triangle } = require('./shape');
const isColor = require('is-color')

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
    validate: color => {
        if(!isColor(color)){
            return 'Invalid color'
          }
      return true;
    }
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
    validate: color => {
      if(!isColor(color)){
        return 'Invalid color'
      }
      return true;
    }
  }
];

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

function generateLogo(text, textColor, shape, shapeColor) {
  let shapeSvg;
  switch (shape) {
    case 'Circle':
      shapeSvg = new Circle(shapeColor);
      break;
    case 'Square':
      shapeSvg = new Square(shapeColor);
      break;
    case 'Triangle':
      shapeSvg = new Triangle(shapeColor);
      break;
  }
  return `<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shapeSvg}
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-size="70">${text}</text>
  </svg>`;
}
