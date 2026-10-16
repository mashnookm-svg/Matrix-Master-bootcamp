/*
// exercise 1
let user = {
  name: "John",
  years: 30
}

let {name, years: age, isAdmin = false} = user;
console.log(name); // John
console.log(age); // 30
console.log(isAdmin); // false
*/

const { StrictMode } = require("react");

/*
// exercise 2
const ourPlanet = "Earth";
let currentVisitorName = "John";
*/

/*
// exercise 3
// The code will throw a error: ReferenceError: sayHi is not defined.
// Reason: In ES6 strict mode, functions declared inside an if block are block-scoped.
// They cannot be accessed or called outside of that block.

let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    alert(`${phrase}, ${user}`);
  }

  sayHi();
}
*/

/*
// exercise 4
let user = ();
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;
*/

// exercise 5
//Yes, it works.
// Why: const prevents reassigning the variable to a new object,
//  but it allows modifying the properties inside the existing object

/*
// exercise 6
let salaries = {
  Fred: 100,
  Ted: 160,
  Ghaith: 130
}

let sum = 0 
for (let key in salaries) {
  sum += salaries[key];
}
console.log(sum)
*/

/*
// exercise 7
result = (a + b < 4) ? `Below` : `Over`;

*/

/*  
// exercise 8
let message = (login == `Employee`) ? `Hello` :
              (login == `Director`) ? `Greetings` :
              (login == ``) ? ` No login` : ``;

*/
