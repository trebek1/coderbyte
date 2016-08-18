var pascal = function(n){
	
	var previous = [];
	var i = 1; 

	while(i<=n){
		var arr = [];
		for(var k = 0; k<i; k++){
			if(k === 0 || k === i- 1){
				arr.push(1);
			}else{
				arr.push(previous[k-1] + previous[k]);
			}
		}
		console.log(arr.join(' '));
		previous = arr; 
		i++; 
	} 
}

pascal(5);