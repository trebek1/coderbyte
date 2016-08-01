function OtherProducts(arr) { 
    var solutions = ''; 
    for(var i =0; i<arr.length; i++){
        var temp = arr.slice(); 
        temp.splice(i,1);
        var mult = 1; 
        for(var k = 0; k<temp.length; k++){
            mult *= temp[k]; 
        }
        if(i !== arr.length -1){
            solutions += mult; 
            solutions += '-';
        }else{
            solutions += mult; 
            return solutions; 
        }
    }
}
   
// keep this function call here 
OtherProducts(readline());