//From https://dev.to/maxpou/typical-javascript-interview-exercises-explained
let dog = {
    name: 'doggo',
    sayName () {
      console.log(this.name)
    }
  }
  let sayName = dog.sayName
  sayName()