// r Triangle
let rTriangle = function(rows){
  if (rows === 0) {
    return 0; 
  } else{
    return rows + rTriangle(rows-1)
   }
 }
 console.log(rTriangle(5))