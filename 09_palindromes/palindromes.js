const palindromes = function (string) {
    const array = string.split("");
    console.log(array);
    let length = array.length;
    console.log(length);
    let halfLength;
    if (length % 2 == 0) {
        halfLength = length / 2;
      } else {
        halfLength = length / 2 - 0.5;
      }
      let a = 0;
      let b = length-1;
      while (halfLength > 0) {
        if (array[a] != array[b]) {
          return false;
        } else {
          halfLength -= 1;
          a += 1;
          b -= 1;
        }
        if(halfLength==0)
        return true
      }

};

// Do not edit below this line
module.exports = palindromes;
