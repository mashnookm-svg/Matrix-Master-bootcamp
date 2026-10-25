// Iterative Fibonacci
// function fibIterative(n){
//     if(n<=2)
//         return 1 ;
//     let seq=1
//     let seq1=1
//     for(let i=3 ; i<=n ; i++){
//         let nextNum=seq1+seq ;
//         seq1=seq;
//         seq=nextNum;
//     }
//     return seq;
// }
// console.log(fibIterative(4))

// Recursive Fibonacci
function fibRecursive(n){
    if(n<=2){
        return 1;
    }else {
        return fibRecursive(n-2)+fibRecursive(n-1);
    }
}
console.log(fibRecursive(4))