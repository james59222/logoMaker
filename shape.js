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
        return `<circle cx="150" cy="100" r="80" fill=${this.shapeColor} />
        <text x="150" y="125" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`

    }
 
    }
    class Square extends Shape {
        render() {
            return`<rect x="0" y="0" width="30" height="30" fill=${this.shapeColor}/>
            <text x="150" y="125" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
        }
    }
    class Triangle extends Shape {
        render() {
            return`<polygon points="50 15, 100 100, 0 100" fill=${this.shapeColor}/>
            <text x="150" y="125" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
        }
    }
  
  module.exports = {Circle, Square, Triangle};