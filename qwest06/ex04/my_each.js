// function my_each(param_1) {

// param_1.forEach((asd)=> {
//     console.log(asd)
// });
// };
function my_each(param_1){
    asd = 0;
    for( i=0; i<param_1.length; i++){
       
       if(param_1[i]){
        
           asd++;
       }
    }
    param_1.forEach(function(param_1) {
        console.log(param_1);
    });

};