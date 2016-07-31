function ArrayAdditionI(arr) { 
    
  var results = [[]];
  var max = Math.max.apply(null, arr);
  arr.splice(arr.indexOf(max), 1);

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0, len = results.length; j < len; j++) {
    	console.log("This is len ", len, "this is j ", j);
      var temp = results[j].concat(arr[i]);
      results.push(temp);
      var sum = temp.reduce(function(acc, cur){
          return acc + cur; 
      });
      if (sum === max){
          return "true"; 
      }
    }
  }
  
  return "false";
         
}
   
// keep this function call here 
ArrayAdditionI([1,2,3,4,5,100]);                            
