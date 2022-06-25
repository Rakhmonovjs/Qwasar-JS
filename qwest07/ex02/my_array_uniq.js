// function my_array_uniq(param_1) { 
//     return myarraqUniq = [...new Set(param_1)]; 
//     };
    function my_array_uniq(array) {
        const result = [];
        const map = {};
      
        for (let i = 0; i < array.length; i++) {
          if (map[array[i]]) {
            continue;
          } else {
            result.push(array[i]);
            map[array[i]] = true;
          }
        }
        return result;
      }