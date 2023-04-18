class Shape {
    constructor() {
      this.color = "";
    }
    colorChoice(color) {
        this.color=color
    }
    }
  class Circle extends Shape {
    render() {
        //return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}"/>`;
        return `<circle cx="150" cy="100" r="80" fill=${this.shapeColor} />;`
        

    }
 
    }
    class Square extends Shape {
        render() {
            return`<rect width="100%" height="100%" fill=${this.shapeColor}/>`
            // `<text x="150" y="125" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
        }
    }
    class Triangle extends Shape {
        render() {
            return`<polygon points="150, 18 244, 182 56,182" fill=${this.shapeColor}/>;`
            // <text x="150" y="125" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
        }
    }
  
  module.exports = {Circle, Square, Triangle};