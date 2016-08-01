function AdditivePersistence(num) { 
var count = 0; 
var number = num + ''; 
var sum = 0; 
    if(num < 10){
        return 0;
    }
    while(sum === 0 || sum >= 10){
        sum = 0; 
        for(var i =0; i<number.length; i++){
            sum += parseInt(number[i]); 
        }
        number = sum + '';
        count ++; 
    }
    
  // code goes here  
  return count; 
         
}
   