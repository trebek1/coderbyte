function LetterCountI(str) { 
    
    var lower = str.toLowerCase(); 
    var options = lower.split(" "); 
    var maps = []; 
    var winner;
    var winnerMax = 0; 
    
    for(var i =0; i<options.length; i++){
    	
    	var results = {}; 
    	var currentMax = 0;  
    	for(var k = 0; k<options[i].length; k++){
    		
    		// for each word loop through and count letters 
    		
    		if(!results[options[i][k]]){
    			
    			results[options[i][k]] = 1;
    			if(results[options[i][k]] > currentMax){
    				currentMax = results[options[i][k]];
    			}
    		}else{
    			results[options[i][k]]++;
    			if(results[options[i][k]] > currentMax){
    				currentMax = results[options[i][k]];
    			}
    		}
    	}
    	if(currentMax > winnerMax){
    		winnerMax = currentMax; 
    		winner = options[i];
    	}
    
    }
    if(winnerMax === 1){
        return -1;
    }
  // code goes here  
  return winner; 
         
}
   
// keep this function call here 
LetterCountI(readline());