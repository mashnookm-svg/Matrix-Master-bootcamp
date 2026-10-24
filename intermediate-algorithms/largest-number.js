function LargestNum(arr){
    let x=[]
    for(let i=0 ; i<arr.length ; i++){
        x.push(arr[i][0])
        for(let j=0 ; j<arr[i].length ; j++){
            if(x[i]<arr[i][j]){
                x[i]=arr[i][j]
            }
        }
    }
    return x
}

let array =[[4, 5, 1, 3,232], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]];
console.log(LargestNum(array));