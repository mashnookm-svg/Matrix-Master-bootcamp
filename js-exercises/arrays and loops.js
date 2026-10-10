// Exercise 1
{
    let fruits = ["apple", "banana", "orange", "mango"];

    for (let i = 0; i < fruits.length; i++) {
        console.log(fruits[i]);
    }
}
// Exercise 2
{
    function average(numbers) {
        let sum = 0;
        for (let i = 0; i < numbers.length; i++) {
            sum += numbers[i];
        }
        return sum / numbers.length;
    }
    console.log(average([10, 20, 30])); // Output: 25
}
// Exercise 3
{
    let numbers = [5, 12, 8, 30, 2];
    let largest = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }
    console.log("The largest number is: " + largest);
}
// Exercise 4
{
    let words = ["hello", "world", "javascript", "loops"];
    let sentence = "";

    for (let i = 0; i < words.length; i++) {
        sentence += words[i] + " ";
    }
    console.log(sentence);
}
// Exercise 5
function nameExists(names, searchName) {
    for (let i = 0; i < names.length; i++) {
        if (names [i] === searchName) {
            return true;
        }
    }
    return false;
}
let friends = ["Alice", "Bob", "Charlie", "David"];
console.log(nameExists(friends, "Charlie")); // Output: true
console.log(nameExists(friends, "Eve")); // Output: false
// Exercise 6
{
    let evenNumbers = [];
    for (let i = 1; i <= 20; i++) {
        if (i % 2 === 0) {
            evenNumbers.push(i);
        }
    }
    console.log(evenNumbers);
}