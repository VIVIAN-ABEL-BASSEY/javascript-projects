function leap_year(year){
    if(year % 4 ===0){
        console.log("leap year");
        if(year%100 ===0){
            console.log("not a leap year");
            if(year % 400 ===0){
                console.log("leap year")
            }
            else{
                console.log("not a leap year")
            }
        }else{
            console.log("leap year");
        }
    }
    
    else{
        console.log("not a leap year");
    }
}
leap_year(1989)