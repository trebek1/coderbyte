function BinaryReversal(str) { 
	var int = parseInt(str).toString(2); 
	while(int.length < 8){
		int = '0' + int;  
	}
	var int2 = int.split('').reverse().join('');
	while(int2.length < 8){
		int2 = '0' + int2; 
	}
  return parseInt(int2,2);
         
}
   
BinaryReversal(readline());