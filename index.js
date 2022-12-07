// Grade


function gradeGenerator(grade){

    if (grade >= 80 && grade <= 100){
        console.log("A")

    }else if (grade >= 60 && grade<=79){
        console.log("B")

    }else if (grade >= 49 && grade <=59){
        console.log("C")

    }else if (grade < 40){
        console.log("E")
    }
    else

    {
        console.log("invalid grade")
    }
}
console.log(gradeGenerator(100))


// Speed


function speedDetector(speed){
    if (speed <= 70){
        console.log("ok")
    }else{
        let points = (speed - 70) / 5
        if (points >= 12){
            console.log("License suspended")
        }else{
            console.log("Points: " + points)
        }
    }

}
console.log(speedDetector(150))

// Salaries
const prompt=require("prompt-sync")();
function calculateSalary(personalRelief,totDeduct,NHIF,NSSF,grossSalary,taxableIncome)

{
let payee;
personalRelief= +2400;
grossSalary= +prompt("enter salary amount")
NHIF= +prompt("enter NHIF deductions")
NSSF= +prompt("enter NSSF deductions")

totDeduct=(NSSF+ personalRelief+ NHIF)
taxableIncome=(grossSalary-totDeduct);

console.log(`Your taxable income is Ksh:${taxableIncome}`)
console.log(`Your total dedactions is Ksh:${totDeduct}`)
//code give total deductions and taxable income

if (taxableIncome <=24000) {
    payee=taxableIncome*0.1
}else if (taxableIncome >=24001 && taxableIncome <=32333){
    payee=taxableIncome*0.25;
}else(taxableIncome >32333)
    payee=taxableIncome*0.3
//program calculates payee

 netSalary=(taxableIncome - payee)
 console.log(`Your net salary is Ksh:${netSalary}`)
}
calculateSalary()