// Shape class with fill in color choices.
class Shape {
    constructor() {
      this.color = "";
    }
    colorChoice(color) {
        this.color=color
    }
    }
// Circle parameters.  
class Circle extends Shape {
    render() {
        return `<circle cx="200" cy="190" r="160" fill="${this.color}" />;`
        }
 
    }
// Square parameters    
class Square extends Shape {
        render() {
            return`<rect width="100%" height="100%" fill="${this.color}"/>`
        }
    }
// Triangle parameters
    class Triangle extends Shape {
        render() {
            return`<polygon points="180, 18 244, 182 56,182" fill="${this.color}"/>;`
        }
    }
  
  module.exports = {Circle, Square, Triangle};
