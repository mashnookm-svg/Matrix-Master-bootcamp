let first=0
let second=0
let third=0
let x=[5, 2, 8, 20, -2, 0, 11, 7, 3, 9, 31]
for(let i=0 ; i<x.length ; i++){
    if(first<x[i]){
        third=second
        second=first
        first=x[i]
    }else if (second<x[i]){
        third=second
        second=x[i]
    }else if(third<x[i]){
        third=x[i]
    }
}
console.log(third)