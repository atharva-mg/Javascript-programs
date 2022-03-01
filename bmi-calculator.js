// BMI CALCULATOR

function bmiCalc(weight, height){
var heightSquare = height * height;
var bmi = Math.round(weight/heightSquare);
return bmi;
}

var calculatedBmi = bmiCalc(79, 1.8);
console.log(calculatedBmi);
alert(calculatedBmi);