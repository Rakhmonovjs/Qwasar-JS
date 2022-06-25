function my_spaceship(a) {
    var side = "up"
    var x=0;
    var y=0;
    for(i in a){
        if(a[i]=="L"){
            if(side == "up"){
                side="left";
            }else if(side =="left"){
                side ="down"
            }else if(side == "down"){
                side="right"
            }else if(side=="right"){
                side ="up"
            }
        }else if(a[i]=="R"){
            if(side=="up"){
                side="right"
            }else if(side == "right"){
                side ="down";
            }else if(side == "down"){
                side="left";
            }else if(side == "left"){
                side = "up"
            }
        }
        else if(a[i]=="A"){
            if(side=="down")y++;
            else if(side=="up")y--;
            else if(side =="right")x++;
            else if(side=="left")x--;
        }
    }
      
    return "{x: "+x+", y: "+y+", direction: '"+side+"'}"
}
    
// console.log(my_spaceship("RAALALL"));