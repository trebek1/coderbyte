function DashInsert(str) { 
    var arr = str.split(''); 
    var prev, cur, count = 0;  
    
    for(var i = 0; i <str.length; i++){
    	
        if(i === 0){
            prev = str[i];
            curr = str[i]; 
        }else{
            prev = str[i-1]; 
            curr = str[i]; 
            
            if(prev % 2 !== 0 && curr % 2 !== 0 ){
                // start, deletion, insertion
                arr.splice(count,0,'-');
                count++;
            }
        }
        count++; 
    }
    
  // code goes here  
  return arr.join(''); 
         
}
   
// keep this function call here 
DashInsert(readline());