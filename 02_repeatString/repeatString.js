const repeatString = function(string, times) {
word="";
if (times >=0){
    while (times >0){
        word=word+string;
        times=times-1;
    }
}   else if (times != 0){
    word = "ERROR"
}
return word;
}
// Do not edit below this line
module.exports = repeatString;