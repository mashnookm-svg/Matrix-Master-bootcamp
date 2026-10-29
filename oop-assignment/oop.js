// exercise 1-class
// definition of the person class

class person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    return `Hello, my name is ${this.name} and I'm ${this.age} years old.`;
  }
}

// exercise 2-this
// working with `this` and callback
const person1 = new person("john", 25);
function describePerson(callback){
    return callback()
}

// exercise 3-promises
// creating the wait promise function
function wait(milliseconds) {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}

// exercise 4-putting it all together
console.log(person1.introduce())
describePerson(function(){
    console.log(this.introduce())
}.bind(person1))