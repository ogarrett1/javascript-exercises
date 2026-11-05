const leapYears = function(year) {
   //both evenly divisible by 4 and not divisible by 100 or just is evenly divisible by 400.
   return ((year % 4 == 0 && year % 100 !== 0) || (year % 400 == 0));
}
// Do not edit below this line
module.exports = leapYears;
