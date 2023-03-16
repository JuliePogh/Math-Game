"use strict"

function getUserChoice(userInput) {
	if (userInput === "rock" || "paper" || "scissors") {
	  return userInput;
	} else {
	  console.log(
		"error, please type one of the following: rock,paper or scissors"
	  );
	}
	userInput = userInput.toLowerCase();
  }
  
  function getComputerChoice() {
	let computerChoice =null;
	computerChoice = Math.random(Math.floor() * 3);
	switch (computerChoice) {
	  case 0:
		return "rock";
		break;
	  case 1:
		return "paper";
		break;
	  case 3:
		return "scissors";
	}
	return computerChoice;
  }
  
  function determineWinner(userChoice, computerChoice) {
	if (userChoice === computerChoice) {
	  return "It is a tie";
	}
	if (userChoice === "rock") {
	  if (computerChoice === "paper") {
		return "The computer won!";
	  } else {
		return "You won!";
	  }
	}
	if (userChoice === "paper") {
	  if (computerChoice === "scissors") {
		return "The computer won!";
	  } else {
		return "You won!";
	  }
	}
	if (userChoice === "scissors") {
	  if (computerChoice === "rock") {
		return "The computer won!";
	  } else {
		return "You won!";
	  }
	}
  }
  function playGame() {
	let userChoice = getUserChoice("rock");
	console.log(userChoice);
	let computerChoice = getComputerChoice();
	console.log(computerChoice);
	console.log(determineWinner(userChoice, computerChoice));
  }
  playGame();


  function getSleepHours(day) {
	let hours = null;
	if(day === "Monday") {
	hours = 8;
	return hours;
  } else if(day === "Tuesday") {
	hours = 7;
	return hours;
  } else if(day === "Wednesday") {
	hours = 6;
	return hours;
  } else if(day === "Tursday") {
	hours = 5;
	return hours;
  } else if(day === "Friday") {
	hours = 4;
	return hours;
  } else if(day === "Saturday") {
	hours = 4;
	return hours;
  } else if(day === "Sunday") {
	hours = 4;
	return hours;
  }
}

console.log(getSleepHours("Tuesday"));

function getActualSleepHours() {
  let sum = getSleepHours("Monday") +getSleepHours("Tuesday") + getSleepHours("Wednesday") + getSleepHours("Tursday") + getSleepHours("Friday") + getSleepHours("Saturday") + getSleepHours("Sunday")
 return sum
}
console.log(getActualSleepHours());

function getIdealSleepHours() {
  let idealHours = 8
  return idealHours *7
}
console.log(getIdealSleepHours())

function calculateSleepDebt() {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours()
  if(actualSleepHours === idealSleepHours) {
   console.log("You got the perfect amount of sleep")
  } else if ( actualSleepHours > idealSleepHours){
    console.log('You got ' + (idealSleepHours + actualSleepHours) + ' hour(s) more sleep than you needed this week.');
  } else if (actualSleepHours < idealSleepHours){
console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');
  }
}

console.log(calculateSleepDebt());



//training

const getRandEvent = () => {
	const random = Math.floor(Math.random() * 3);
	if (random === 0) {
	  return 'Marathon';
	} else if (random === 1) {
	  return 'Triathlon';
	} else if (random === 2) {
	  return 'Pentathlon';
	}
  };
  
  // The scope of `days` is too tight 
  const getTrainingDays = event => {
	 let days;
	if (event === 'Marathon') {
	  days = 50;
	} else if (event === 'Triathlon') {
	   days = 100;
	} else if (event === 'Pentathlon') {
	   days = 200;
	}
  
	return days;
  };
  
  // The scope of `name` is too tight 
  const name = 'Nala';
  const logEvent = (name,event) => {
	console.log(`${name}'s event is: ${event}`);
  };
  
  const logTime = (name,days) => {
  console.log(`${name}'s time to train is: ${days} days`);
  };
  
  const event = getRandEvent();
  const days = getTrainingDays(event);
  // Define a `name` variable. Use it as an argument after updating logEvent and logTime 
  
  
  logEvent(name,event);
  logTime(name,days);
  
  const event2 = getRandEvent();
  const days2 = getTrainingDays(event2);
  const name2 = 'Warren';
   
  logEvent(name2, event2);
  logTime(name2, days2);
  
//Array methods
let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
secretMessage.pop();
console.log(secretMessage.length);
secretMessage.push("to", "Program");
secretMessage[0] = "Practicing";
secretMessage.shift();
secretMessage.unshift("Programming");
secretMessage.splice(6,1,"know");
console.log(secretMessage.join());