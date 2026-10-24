function fib(num){
    let seq=1
    let seq1=0
    let seq2=0
    for(let i=2 ; i<=num ; i++){
        seq2=seq1
        seq1=seq
        seq=seq1+seq2
    }
    return seq
}

console.log(fib(6))