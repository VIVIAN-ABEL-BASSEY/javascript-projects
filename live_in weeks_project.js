/* Function
Assuming you are to live for 90,these program will tuake your current year and
calculate how many months,weeks and days you have remaining on earth
were we have
365days i a year
52weeks in 1yr & 12months per year*/


function live_rem(n){
    let days_rem = 365*(90-n);
    let weeks_rem =52*(90-n);
    let months_rem = 12*(90-n)
    console.log(`You have ${days_rem } days, ${weeks_rem} weeks and ${months_rem} months remaining on earth to be lived,so live wisely and enjoy/love God`)
}

live_rem(22)