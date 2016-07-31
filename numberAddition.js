function NumberAddition(str) { 
    var sum = 0; 
    var possible = ''; 
    for(var i =0; i<str.length; i++){
        var trial = parseInt(str[i]);
        if(!isNaN(trial)){
            possible += trial;
            
        }
        if(isNaN(trial) || i === str.length -1){
            if(possible !== ''){
            	sum += parseInt(possible);	
            }
            possible = ''; 
        }
    }
  // code goes here  
  return sum; 
         
}
   
// keep this function call here 
NumberAddition(readline());