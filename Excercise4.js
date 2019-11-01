//From https://dev.to/maxpou/typical-javascript-interview-exercises-explained
function Dog (name) {
    this.name = name
  }
  Dog.bark = function () {
    console.log(this.name + ' says woof')
  }
  let fido = new Dog('fido')
  fido.bark()