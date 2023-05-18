const removeFromArray = function(array, ...number) {
//const number = [1,2];
//const array = [1,2,3,4];

let arrayLength = "";
let numberLength = (number.length)-1;
while (numberLength >=0){
    arrayLength= (array.length)-1;
while (arrayLength >= 0){
    if (array[arrayLength] === number[numberLength]){
        delete array[arrayLength]
    } arrayLength = arrayLength-1;
}
numberLength = numberLength-1;
}
const result=array.filter(n=>n!==undefined);
console.log();

return result;


};

// Do not edit below this line
module.exports = removeFromArray;
