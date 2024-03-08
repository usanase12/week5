//Sleep Debt Calculator 
const getSleepHours = day =>{
if(day === 'monday')
return 8;
else if(day === 'tuesday'){
    return 7;
}
else if(day ==='wednesday'){
    return 7;
}
else if(day ==='thursday'){
    return 7;
}
else if(day ==='friday'){
    return 7;
}
else if(day ==='saturday'){
    return 9;
}
else if(day ==='Sunday'){
    return 9;
}
};
console.log(getSleepHours('tuesday'));
const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday');
+ getSleepHours('friday')+getSleepHours('saturday') + getSleepHours('sunday');
const getIdealSleepHours = () =>{
    const idealHours = 8;
    return idealHours *7;
};
console.log(getActualSleepHours()); // should print the sum of all sleep hours in the week
console.log(getIdealSleepHours()); // if idealHours is 8, should print 56
const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();

    if (actualSleepHours === idealSleepHours) {
        console.log('User got the perfect amount of sleep');
    } else if (actualSleepHours > idealSleepHours) {
        console.log('User got more sleep than needed');
    } else {
        console.log('User should get some rest');
            console.log('You got ' + (actualSleepHours - idealSleepHours) + ' hour(s) more sleep than you needed this week.');  
    }   
};
calculateSleepDebt();// Call the function to execute the code

// Training days

  