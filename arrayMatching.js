function ArrayMatching(strArr) { 
    
    var s1=strArr[0].split('').splice(1,strArr[0].length-2).join('').split(', ');
    var s2=strArr[1].split('').splice(1,strArr[1].length-2).join('').split(', ');
	var longer, shorter; 
	if(s1.length >= s2.length){
		longer = s1; 
		shorter = s2; 
	}else{
		longer = s2; 
		shorter = s1; 
	}
	var diff = longer.length - shorter.length; 
	
	// make both the same size 
	for(var i =0; i<diff; i++){
		shorter.push(0); 
	}
    var ans = '';
  
    for(var i =0; i< longer.length; i++){
        if(i !== longer.length -1){
             
            ans += (parseInt(shorter[i]) + parseInt(longer[i])); 
            ans += '-'; 
  
        }else{
            ans += (parseInt(shorter[i]) + parseInt(longer[i])); 
            
            return ans; 
        }
    }
}
   
   
// keep this function call here 
ArrayMatching(readline());