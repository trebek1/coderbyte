function CountingMinutesI(str) { 
    var change = 0, 
        diff1 = 0,
        diff2 = 0; 
    if(str[2] === ':'){
        var num1 = parseInt(str[0] + str[1]);
        var num2 = parseInt(str[3] + str[4]);
        var letter1 = str[5];
        // 9 or 10 is an option 
        if(str[9] === ":"){
	        var num3 = parseInt(str[8]);
	        var num4 = parseInt(str[10] + str[11]);        
	        var letter2 = str[12]; 
	    }else if(str[10] === ":"){
	        var num3 = parseInt(str[8] + str[9]);
	        var num4 = parseInt(str[11] + str[12]);        
	        var letter2 = str[13]; 
	    }
    }else{
        var num1 = parseInt(str[0]);
        var num2 = parseInt(str[2] + str[3]);
        var letter1 = str[4];
        // 8 or 9 is an option
        if(str[8] === ":"){
	        var num3 = parseInt(str[7]);
	        var num4 = parseInt(str[9] + str[10]);        
	        var letter2 = str[11]; 
	    }else if(str[9] === ":"){
	        var num3 = parseInt(str[7] + str[8]);
	        var num4 = parseInt(str[10] + str[11]);        
	        var letter2 = str[12]; 
	    }
    }
 
    console.log(num1, num2, num3, num4, letter1, letter2)
	
	
	var answer = 0; 
	
	if(letter1 === letter2){
		if (num1*60 + num2 > num3*60 + num4 && letter1 === 'a'){
			return 60*24 - num2 + num4 
		}
		diff1 = Math.abs((num3 - num1)*60); 
		diff2 = Math.abs(60 - num4) + num2;
		
		answer += diff1;
		answer += diff2; 
	}else{
		diff1 = (12 - num1)*60 + num3*60; 
		if(num2 !== 0){
			diff2 = 60 - num2 + num4 -60;		
		}else{
			diff2 = num4;		
		}
		
		answer += diff1;
		answer += diff2;
	}
	
	
  // code goes here  
  return answer; 
         
}
   
// keep this function call here 
CountingMinutesI("2:38pm-1:39pm");     