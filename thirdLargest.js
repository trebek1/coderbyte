var test = [1,2,3,4,9,6,7,8,5]; 

function thirdLargest(){
	
	var x = test.sort(function(a,b){
		return b - a; 
	});

	return x[2]; 	
}

console.log(thirdLargest(test)); 


