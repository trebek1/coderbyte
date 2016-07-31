function DivisionStringified(num1,num2) { 
	var num = num1/num2; 
	if (num < 1000 ){
		return Math.round(num);
	}
	var newNum = (Math.round(num) + '').split('');   
	for(var i = newNum.length-3; i>0; i-=3){
		newNum.splice(i,0,',');
	}
	
  // code goes here  
  return newNum.join(''); 
         
}

   
// keep this function call here 
DivisionStringified(readline());