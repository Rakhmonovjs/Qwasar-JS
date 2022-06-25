// function my_upcase(param_1) {
// return(param_1.toUpperCase()); 
// };
function my_upcase(str) {
    var newStr = '';
    for (var i=0;i<str.length;i++) {
      var thisCharCode = str[i].charCodeAt(0);
      if ((thisCharCode>=97 && thisCharCode<=122)||(thisCharCode>=224 && thisCharCode<=255)) {
          newStr += String.fromCharCode(thisCharCode - 32);
      } else {
          newStr += str[i];
      }
    }
    return newStr;
  }


