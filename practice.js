// let age = prompt("How old are you?");
// console.log(age)

var a=3;
var b=8;
console.log("a:",a)
console.log("b:",b)
// frequently asked qns on interview == write a code below to switch the values of a&b such that a=8 and b=3
var c=a;
a=b;
b=c;
console.log("a:",a)
console.log("b:",b)


// capitalising the first latter of a user name, in python we use .title() method
let userName = prompt("What is your name")
let firstLetter = userName.slice(0,1)
let uppercaseFirstLetter = firstLetter.toUpperCase()// python uses only .upper()
let restLetter = userName.slice(1,userName.length)
let lowercaseRestletter = restLetter.toLocaleLowerCase()//pytho uses only .lower
let supportedName =uppercaseFirstLetter + lowercaseRestletter
alert("Welcome to my team " +  supportedName + " !")
