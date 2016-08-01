// top solution 
function PowersofTwo(num) { 

  var i = 0;
  do{
    if (Math.pow(2, i)==num)
      return "true";
    if (Math.pow(2, i)>num)
      return "false"
	i++;    
  }while(true)
        
}

// my solution 

function PowersofTwo(num) { 
var start = 2; 

    while(start<= num){
        if(num%start !== 0){
            return false; 
        }
        if(start === num){
            return true; 
        }
        
        start = start*2; 
    }
  // code goes here  
  return num; 
         
}
   
// keep this function call here 
PowersofTwo(readline());