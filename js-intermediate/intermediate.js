// 1. addition

// let sum = 0
// for(let i=200 ; i<=2700 ; i++){
//     if((i%3===0 || i%5===0) && !(i%3===0 && i%5===0)){
//         sum+=i
//     }
// }
// console.log(sum);

// 2. shift the values

// let x = [2,1,6,4,-7]
// let newArray=[]
// for(let i=0 ; i<x.length ; i++){
//     newArray.unshift(x[i])
// }
// console.log(newArray)

// let x =[2,1,6,4,-7]
// let newArr =[]
// for(let i=x.length -1 ; i>=0 ; i--){
//     newArr.push(x[i]);
// }
// console.log(newArr)

// 3. fizzbuzz

// let arr = [];
// for(let i=1 ; i<=135; i++){
//     if(i%3===0 && i%5===0){
//         arr.push(`FizzBuzz`)
//     } else if(i%3===0){
//         arr.push(`Fizz`)
//     } else if(i%5===0){
//         arr.push(`Buzz`)
//     } else {
//         arr.push(i);
//     }
// }
// console.log(arr)

// 4. fibonacci

// let fib=[]
// for(let i=0 ; i<1000000; i++){
//     if(i==0 || i==1){
//         fib[i]=i
//     }else{
//         fib[i]=fib[i-1]+fib[i-2]
//     }
// }
// console.log(fib)

// 5. remove the negative

// let x =[1,-2,4,1,]
// for(let i=0 ; i<x.length ; i++){
//     if(x[i]<0){
//         x.splice(i,1)
//         i=i-1
//     }
// }
// console.log(x)

// 6. communist censorship

let x = ['Man','I','Love','The','Matrix','Program']
let word = 'Program'
let st = ''
for(let i=0 ; i<word.length ; i++){
    st+='*'
}
for(let i=0 ; i<x.length ; i++){
    if(word==x[i]){
        x[i]=st
    }
}
console.log(x)