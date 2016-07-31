function SecondGreatLow(arr) { 
    
    var max = Math.max.apply(null,arr);
    var min = Math.min.apply(null,arr); 
    
    if(arr.length > 3){
        arr.splice(arr.indexOf(max),1);
        arr.splice(arr.indexOf(min),1); 
        return Math.min.apply(null,arr) + " "+ Math.max.apply(null,arr);
    }else if(arr.length === 3){
        var mx = -9999, mn = 9999; 
        for(var i = 0; i<arr.length; i++){
            if(arr[i] < mn){
                mn = arr[i];
            }
            if(arr[i] > mx){
                mx = arr[i];
            }
            if(i === arr.length -1){
                return mn + ' ' + mx; 
            }
        }
    }else{
        return Math.max.apply(null,arr) + ' ' + Math.min.apply(null,arr); 
    }
         
}
   
// keep this function call here 
SecondGreatLow(readline());