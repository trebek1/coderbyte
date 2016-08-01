function OffLineMinimum(strArr) { 

    var nums = []; 
    var result = []; 
  for(var i = 0; i<strArr.length; i++){
      if(strArr[i] !== 'E'){
          nums.push(parseInt(strArr[i])); 
      }else{
          result.push(nums.splice(nums.indexOf(Math.min.apply(null,nums)),1));
      }
  }
  return result.join(',');
         
}
   
// keep this function call here 
OffLineMinimum(readline());