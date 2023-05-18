const fibonacci = function(a) {
    const array =[0,1,1];
    let i=2;
    if (a == 1 || a == 2){
      return 1;
    }
    if (a <0)
    return "OOPS"
    while (a > 1){
      array[i]= array[i-1]+array[i-2]
    i+=1;
    a-=1;
    }
    return array[i-1];
    };

// Do not edit below this line
module.exports = fibonacci;
