function palindrom(string){
    let st=string.split('').join('').toLowerCase()
        for(let i=0 ; i<st.length/2 ; i++){
            if(st[i]!=st[st.length-1-i]){
                return false
            }
        }
        return true
}

console.log(palindrom('Hel leh'))