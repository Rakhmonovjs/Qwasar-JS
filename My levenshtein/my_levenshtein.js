function  my_levenshtein(p1, p2){ 
    var asd = 0; 
    if(p1.length != p2.length){ 
        return -1; 
    }else { 
        for(var i = 0; i < p1.length; i++){ 
            if(p1[i] != p2[i]){ 
                asd++; 
            } 
        } 
    } 
    return asd; 
} 
 
 
 