//const convertToCelsius = function(temp) {
    let celTemp = "";
  if ((typeof temp!= "number")){
     celTemp = "ERROR";
  } else{
    celTemp= Math.round(((temp-32)*50)/9)/10;
  }
  return celTemp;
//};

//const convertToFahrenheit = function(temp) {
  let fahrenheitTemp="";
  if ((typeof temp!= "number")){
    fahrenheitTemp = "ERROR";
  } else{

  fahrenheitTemp=Math.round((((temp*9)/5)+32)*10)/10;
};
//return fahrenheitTemp;
//}
// Do not edit below this line
//module.exports = {
//  convertToCelsius,
// convertToFahrenheit
//};
// 2cel => (temp - 32)5/9
// 2far => (temp*9/5) + 32