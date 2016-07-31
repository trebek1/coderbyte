function SwapCase(str) { 
    var result = []; 
    for(var i =0; i<str.length; i++){
        var code = str[i].charCodeAt();
        // 97 -> 122
        if(code > 96 && code < 123 ){
            result.push(str[i].toUpperCase());
            // 65 -> 90
        }else if(code > 64 && code < 91){
            result.push(String.fromCharCode(str[i].charCodeAt()+32));
        }else{
            result.push(str[i]);
        }
    }

  // code goes here  
  return result.join(''); 
         
}
   
// keep this function call here 
SwapCase(readline());                            



