function FindLongWord(st){
    let arr=st.split(' ')
    let max=0
    for(let i=0 ; i<arr.length ; i++){
        if(max<arr[i].length){
            max=arr[i].length
        
        }
    }
    return max    
}
let string = 'The quick brown fox jumped over the lazy dog'
console.log(FindLongWord(string))