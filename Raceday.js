let raceNumber = Math.floor(Math.random() *1000);
const registeredEarly = false;
const age = 16;
if (age>18 && registeredEarly) {
    raceNumber+=1000;
    console.log(`Race is going to start at 09:30, your Race number is ${raceNumber}`);
  }
  else if(age>18 && !registeredEarly){
 console.log(`Race is going to start at 11:30, your Race number is ${raceNumber}`);
  }
  else if(age<18){
    console.log(`Race will begin at 12:30, your race number is ${raceNumber}`);
  }else{
    console.log('you are not registered');
  }
  