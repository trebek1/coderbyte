function NonrepeatingCharacter(str) { 
var map = {}; 
for(var i =0; i<str.length; i++){

    if(!map[str[i]]){
        map[str[i]] = 1; 
    }else{
        map[str[i]]++; 
    }
        
}

for(var key in map){
    if (map[key] === 1){
        return key; 
    }
}

}
   
// keep this function call here 
NonrepeatingCharacter(readline());                            
