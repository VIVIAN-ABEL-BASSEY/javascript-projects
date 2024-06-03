
numbers =[]
function fizzBuzz(){
    for(let i=1; i<=100;i++){
        if(i%3===0 && i%5===0){
            console.log("fizzbuzz");
            numbers.push(i);
        }else if(i%3==0){
            console.log("fizz");
            numbers.push(i);
        }else if(i%5===0){
            console.log("buzz");
            numbers.push(i)
        }else{
            console.log(i)
            
        }
    }
    console.log(numbers)
}

fizzBuzz()