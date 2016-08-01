function OverlappingRanges(arr) { 
    var start1 = arr[0];
    var start2 = arr[2];
    var end1 = arr[1];
    var end2 = arr[3]; 
    var req = arr[4];
    var overlap = 0; 
    // if there is overlap do something, else return false 
    var oneInside = start1 >= start2 && start1 <= end2;
    var twoInside = start2 >= start1 && start2 <= end1;
    if(oneInside || twoInside){
        if(oneInside){
            // completely inside
            if(end1 < end2){
                overlap = end1 - start + 1; 
                return overlap >= req; 
            }else{
                overlap = end2-start1 + 1; 
                return overlap >= req; 
            }
        }else{
            // completely inside
            if(end2 < end1){
                overlap = end2 - start2 + 1; 
                return overlap >= req; 
            }else{
                overlap = end1-start2 + 1; 
                return overlap >= req; 
            }
            
        }
        
    }else{
        return false; 
    }
    
  // code goes here  
  
         
}
   
// keep this function call here 
OverlappingRanges(readline());