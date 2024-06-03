/* BMI  means body mass index,it is calculated thus;
bmi = weight/height^2*/
function BMI(weight,height){
    let bmi = weight/(height**2)
    bmi = Math.floor(bmi)
    console.log(`Your body mass index is: ${bmi}`)
}

BMI(65,1.8) // calling this ways only if you console log inside the function while returned once used the approach bellow

function B_M_I(weight,height){
    let bmi = weight/Math.pow(height,2)
    bmi = Math.round(bmi)
    return bmi
}

output = B_M_I(65,1.8)// you use this approach when inside your code you return the output instead of displaying it using console.log
//console.log(`Here's your output bmi: ${output}`)// functions whose output are return servers/are used as inputs to other functions or varieble
if(output <18.5){`Your BMI is ${output}, so you are underweight.`
}else if(output > 18.5 && output <= 24.9){`Your BMI is ${output}, so you have a normal weight.`
}
else if (output >24.9){`Your BMI is <bmi>, so you are overweight.`
}
else{
    `Go register on a gym`
}
 