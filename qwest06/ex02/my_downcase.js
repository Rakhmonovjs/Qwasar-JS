// function my_downcase(param_1) {
//     return param_1.toLowerCase();

// };

function my_downcase(str) {
    var newStr = '';
    for (var i=0;i<str.length;i++) {
      var thisCharCode = str[i].charCodeAt(0);
      if ((thisCharCode>=65 && thisCharCode<=90)||(thisCharCode>=192 && thisCharCode<=223)) {
          newStr += String.fromCharCode(thisCharCode + 32);
      } else {
          newStr += str[i];
      }
    }
    return newStr;
  }

