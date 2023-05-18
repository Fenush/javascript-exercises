const sumAll = function(integerOne, integerTwo) {
//let integerOne=-10;
//let integerTwo=4;    
    let max=0;
    let min=0;
    let result=0;


   if (integerOne < 0 || integerTwo < 0){
        result = "ERROR";
    }    else {
        if (integerOne > integerTwo){
        max= integerOne;
        min= integerTwo;
    }   else    {
        max=integerTwo;
        min=integerOne
    }   result=min; 
    while (min < max){
        min=min+1;
        result=result+min;
    }}
    if((typeof integerOne != "number" || typeof integerTwo != "number")){
        result = "ERROR";
    }

//console.log(result);
//let a = result;
    return result;
}

// Do not edit below this line
module.exports = sumAll;
