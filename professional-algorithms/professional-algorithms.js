// Game of 3s

// function GameOfThree(num){
//     while(num>1){
//         if(num%3===0){
//             console.log(num, 0)
//             num/=3
//         }else if (num%3===1){
//             console.log(num, -1)
//             num=num-1
//             num/=3
//         }else {
//             console.log(num, +1)
//             num=num+1
//             num/=3
//         }
//     }
//     return num
// }

// console.log(GameOfThree(136));

// Magic Squares

// let arr=[8,1,6,
//          3,5,7,
//          4,9,2]

// let dia1=arr[0]+arr[4]+arr[8]
// let dia2=arr[2]+arr[4]+arr[6]
// if(dia1==dia2){
//     console.log(true)
// }else{
//     console.log(false)
// }

// Search and Replace

// let st ='A quick brown fox jumped over the lazy dog'
// function SearchandReplace(string, before, after){
//     let arr=string.trim().split(' ')
//     for(let i=0 ; i<arr.length ; i++){
//         if(arr[i].toLowerCase()==before.toLowerCase())
//             if(arr[i][0]==arr[i][0].toUpperCase()){
//                 arr[i]=after[0].toUpperCase()+after.slice(1)
//             }else{
//                 arr[i]=after
//             }
//     }
//     return arr.join(' ')
// }
// console.log(SearchandReplace(st, 'jumped', 'leaped'))

// Sum All Primes

// function SumPrimes(num){
//     let sum=0
//     for(let i=num ; i>=2 ; i--){
//         let isPrime=true
//         for(let j=i-1 ; j>=2 ; j--){
//             if(i%j===0){
//                 isPrime=false
//                 break
//             }
//         }
//         if(isPrime==true){
//             sum+=i
//         }
//     }
//     return sum
// }
// console.log(SumPrimes(10))

// Sum All Odd Fibonacci

function sumFibs(num){
    let seq=1
    let seq1=0
    let sum=0
    while(seq<=num){
        if(seq%2 !==0){
            sum+=seq;
        }
        let nextNum=seq1+seq;
        seq1=seq
        seq=nextNum;
    }
    return sum;
}
console.log(sumFibs(10))