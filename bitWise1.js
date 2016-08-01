function BitwiseOne(strArr) { 
var result = ''; 
for(var i =0; i<strArr[0].length; i++){
    if(parseInt(strArr[0][i]) || parseInt(strArr[1][i])){
        result += '1'; 
    }else{
        result +='0';
    }
}
  // code goes here  
  return result; 
         
}
   
// keep this function call here 
BitwiseOne(readline());