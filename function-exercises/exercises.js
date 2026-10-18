/* 
// exercise 1
let checkAge = (age) => age > 18 ? true : confirm('Do you have your parents permission to access this page?');
*/

/*
// exercise 2
function pow(x, n) {
    let  result = 1;

    for(let i = 1; i <= n; i++) {
        result = result * x;
    }
    return result;
}
*/
 

// exercise 3
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no()
}
/*
ask(
  "Do you agree?",
  () => alert("You agreed.") ,
  () => alert("You canceled the execution.") 
)
  */

/*
// exercise 4
let calculator = {
  read: function() {
    this.a = +prompt("Enter first number:", 0);
    this.b = +prompt("Enter second number:", 0);
  },

  sum: function() {
    return this.a + this.b;
  },

  mul: function() {
    return this.a * this.b;
  }
},

calculator.read();
alert( calculator.sum());
alert( calculator.mul());
*/

/*
// exercise 5
let min = (a, b) => a < b ? a : b;

console.log(min(5, 3))
console.log(min(1, 5))
*/