function ChangingSequence(arr) { 

    var count = 0; 
    var increasing = arr[1] -arr[0] > 0 ? true: false;
    
    for(var i = 1; i<arr.length; i++){
        var last = arr[i-1];
        var curr = arr[i]; 
        if(curr > last && increasing === true){
            count ++;
        }else if(curr < last && increasing === false){
            count ++
        }else{
            return count; 
        }
        
        
        
    }
    
    return -1; 
         
}
   
// keep this function call here 
ChangingSequence(readline());                            
