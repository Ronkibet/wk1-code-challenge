//This program takes in a score through the inputScore function and returns
//a grade depending on the score
var nameData = ['A', 'B', 'C', 'D', 'E'];   

//Allow prompts to be added 
function gradeGenerator() {
var gradeData = prompt('Enter your grade to check your letter grade');
getAvg(nameData,gradeData);
}
//This is a function that takes in a students score as an agrument and ensure
//the score provided is valid 

//This function returns a grade depending on the score provided in
//the first function
function getAvg(nameData, gradeData) {        
        if (gradeData>= 79) {
          alert("Your grades are " + nameData[0]);
        } else if (gradeData >= 60) {
          alert("Your grades are " + nameData[1]);
        } else if (gradeData >= 59) {
          alert("Your grades are " + nameData[2]);
        } else if (gradeData >= 40) {
          alert(" Your grades are " + nameData[3]);
        } else {
          alert("Your grades are " + nameData[4]);
        }
    }