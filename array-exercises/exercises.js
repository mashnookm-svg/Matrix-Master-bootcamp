/*
// exercise 1
let arr = [5, 3, 8, 1]

function filterRange(arr, a, b) {
    return arr.filter(x => x >= a && x <= b);
 }

let filtered = filterRange(arr, 1, 4)

// alert( filtered )  // 3,1 (matching values)

// alert( arr )      // 5,3,8,1 (not modified)

console.log(filtered);
console.log(arr);
*/

/*
// exercise 2
let john = { name: "John", age: 25 }
let pete = { name: "Pete", age: 30 } 
let mary = { name: "Mary", age: 28 }

let users = [ john, pete, mary ]

let names = users.map(x => x.name);

// alert( names ) // John, Pete, Mary
console.log(names)
*/

/*
// exercise 3
function getAverageAge(users) {
    let totalAge = users.reduce((sum, user) => sum + user.age, 0)
    return totalAge / users.length;
}
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

// alert( getAverageAge(arr) )   // (25 + 30 + 29) / 3 = 28
console.log("Average Age", getAverageAge(arr));
*/