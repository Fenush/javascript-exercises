const leapYears = function(leapYear) {
//let leapYear = 1100;
let leapYearAnswer = "";
function numberOrWhat(leapYear){
    if (typeof leapYear != "number" || leapYear < 0) {
        leapYearAnswer = "ERROR";
      }
      return leapYearAnswer;
}
numberOrWhat();

if (leapYear%100==0 && leapYear%400==0 ||leapYear%4==0 && !(leapYear%100==0)){
    leapYearAnswer=true;
}   else    {
    leapYearAnswer=false;
}
return leapYearAnswer;

//return leapYearAnswer;
}
// Do not edit below this line
module.exports = leapYears;
