let string ='sHoRt AnD sToUt'

function TitleCase(st){
    let arr=st.toLowerCase().split(' ');
    for(let i=0 ; i<arr.length ; i++){
        arr[i]=arr[i][0].toUpperCase()+arr[i].slice(1)
    }
    return arr.join(' ') 
}
console.log(TitleCase(string))