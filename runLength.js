function RunLength(str) { 
    var num = 0; 
    var curr = str[0]; 
    var count = 1; 
    var result = ''; 
    for(var i = 1; i<str.length; i++){
        if(str[i] === curr){
            count ++; 
        }else{
            result += count; 
            result += curr; 
            count = 1;
            curr = str[i]; 
        }
    }
    result += count; 
    result += curr; 
  // code goes here  
  return result; 
         
}
   
// keep this function call here 
RunLength(readline());