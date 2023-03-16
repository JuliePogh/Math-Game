/*Check if a number is a multiple of 3, 5 or 7 and output the appropriate message. 
Input                         Output 
21                               “21 is a multiple of 3 and 7.” 
35                               “35 is a multiple of 5 and 7.“ 
13                              “13 is not a multiple of 3, 5 or 7.” 
24                               “24 is a multiple of 3.” 
420                              “420 is a multiple of 3, 5 or 7.” 








let number = 23;
let result = `${number} is not a multiple of 3, 5 or 7.`;

if (number % 105 === 0){
	result = `${number} is a multiple of 3, 5 or 7`;
}  else if (number % 35 === 0){
    result = `${number} is a multiple of 5 and 7.`;
} else if(number % 21 === 0) {
    result = `${number} is a multiple of 3 and 7.`;
} else if (number % 15 === 0) {
	result = `${number} is a multiple of 3 and 5.`;
} else if (number % 3 === 0) {
	result = `${number} is a multiple of 3.`;
} else if (number % 5 === 0) {
	result = `${number} is a multiple of 5.`;
} else if (number % 7 === 0) {
	result = `${number} is a multiple of 7.`;
} 
console.log(result);



const number = 420
let result = null


switch (0) {
    case number % 105: result = "3,5,7"
        break;
    case number % 35: result = "5,7"
        break;
    case number % 21: result = "3,7"
        break;
    case number % 15: result = "3,5"
        break;
    case number % 7: result = "7"
        break;
    case number % 5: result = "5"
        break;
    case number % 3: result = "3"
        break;
}
console.log(result);


/*Given an age, figure out whether someone is a baby(1 months - 12 months), toddler (1 year - 2 years), child(3 years - 12 years ), teenager(13 years - 17 years) or adult(18 years and more ). Also check that age in months is between 1 and 12. 
Input                             Output 
8,                             “months” "baby" 
45,                           “years” "adult" 
3,                              “years” "child" 


let age = 110;
let yearsOrMonth = "years";
let result = "adult"

if(yearsOrMonth === "month" && age < 13){
    result = "baby"
}else{
    if(yearsOrMonth === "years"){
        if(age === 1 || age === 2){
            result = "toddler"
        }else if(age > 2 && age < 13){
            result = "child"
        }else if (age > 12 && age < 18){
            result = "teenager"
        }
    }
}
if(yearsOrMonth === "month" && age > 12){
    result = "erorr"
}

console.log(result);

Artur Artur, [11/30/22 11:26 AM]
const number = 420
let result = null


switch (0) {
    case number % 105: result = "3,5,7"
        break;
    case number % 35: result = "5,7"
        break;
    case number % 21: result = "3,7"
        break;
    case number % 15: result = "3,5"
        break;
    case number % 7: result = "7"
        break;
    case number % 5: result = "5"
        break;
    case number % 3: result = "3"
        break;
}
console.log(result);
/*given three numbers. Sort them by the ascending order. 

Input                                    Output 
45 , 26, 78                              26, 45, 78 
-23, -456, 0                            -456, -23, 0 



Artur Artur, [11/30/22 11:21 AM]
let age = 110;
let yearsOrMonth = "years";
let result = "adult"

if(yearsOrMonth === "month" && age < 13){
    result = "baby"
}else{
    if(yearsOrMonth === "years"){
        if(age === 1 || age === 2){
            result = "toddler"
        }else if(age > 2 && age < 13){
            result = "child"
        }else if (age > 12 && age < 18){
            result = "teenager"
        }
    }
}
if(yearsOrMonth === "month" && age > 12){
    result = "erorr"
}

console.log(result);

Artur Artur, [11/30/22 11:26 AM]
const number = 420
let result = null


switch (0) {
    case number % 105: result = "3,5,7"
        break;
    case number % 35: result = "5,7"
        break;
    case number % 21: result = "3,7"
        break;
    case number % 15: result = "3,5"
        break;
    case number % 7: result = "7"
        break;
    case number % 5: result = "5"
        break;
    case number % 3: result = "3"
        break;
}
console.log(result);


let firstNumber = 0;
let secondNumber = 5;
let thirdNumber = -400;


if(firstNumber > secondNumber){
    firstNumber = firstNumber + secondNumber;
    secondNumber = firstNumber - secondNumber;
    firstNumber = firstNumber - secondNumber
}

if(secondNumber > thirdNumber){
    thirdNumber = thirdNumber + secondNumber;
    secondNumber = thirdNumber - secondNumber;
    thirdNumber = thirdNumber - secondNumber;

    if(firstNumber > secondNumber){
        firstNumber = firstNumber + secondNumber;
        secondNumber = firstNumber - secondNumber;
        firstNumber = firstNumber - secondNumber
    }
}
console.log(firstNumber);
console.log(secondNumber);
console.log(thirdNumber);

/*
Percentage marks obtained by a student in three exams are to be 
entered to a computer. An indication of Pass or Fail is given out after the three 
marks are entered. The criteria for passing are as follows: 
A student passes if all three examinations are passed. 3 ic mek@ <= 40
Additionally a student may pass if only one subject is failed but the overall 
average is greater than or equal to 50. 
The pass mark for an individual subject is 40. 
Input                                   Output 
65, 70, 60                          “Passed” 
10, 85, 75                          “Passed” 
35, 25, 40                          “Not passed” 
20, 40, 40                          “Not passed” 
 
const mark1 = 500;
const mark2 = 39;
const mark3 = 39;
let count = 0;
let isPassed = false;

if(mark1 >= 40) count++;
if(mark2 >= 40) count++;
if(mark3 >= 40) count++;

switch(count){
	case 3: isPassed = true;
	break;
	case 2: isPassed = (mark1 + mark2 + mark3)/3 >= 50 ;
}
const result = isPassed ? "passed" : "not passed";
	
console.log(result);

Artur Artur, [11/30/22 11:21 AM]
let age = 110;
let yearsOrMonth = "years";
let result = "adult"

if(yearsOrMonth === "month" && age < 13){
    result = "baby"
}else{
    if(yearsOrMonth === "years"){
        if(age === 1 || age === 2){
            result = "toddler"
        }else if(age > 2 && age < 13){
            result = "child"
        }else if (age > 12 && age < 18){
            result = "teenager"
        }
    }
}
if(yearsOrMonth === "month" && age > 12){
    result = "erorr"
}

console.log(result);

Artur Artur, [11/30/22 11:26 AM]
const number = 420
let result = null


switch (0) {
    case number % 105: result = "3,5,7"
        break;
    case number % 35: result = "5,7"
        break;
    case number % 21: result = "3,7"
        break;
    case number % 15: result = "3,5"
        break;
    case number % 7: result = "7"
        break;
    case number % 5: result = "5"
        break;
    case number % 3: result = "3"
        break;
}
console.log(result);

Artur Artur, [12/2/22 11:00 AM]
let firstNumber = 0;
let secondNumber = 5;
let thirdNumber = -400;


if(firstNumber > secondNumber){
    firstNumber = firstNumber + secondNumber;
    secondNumber = firstNumber - secondNumber;
    firstNumber = firstNumber - secondNumber
}

if(secondNumber > thirdNumber){
    thirdNumber = thirdNumber + secondNumber;
    secondNumber = thirdNumber - secondNumber;
    thirdNumber = thirdNumber - secondNumber;

    if(firstNumber > secondNumber){
        firstNumber = firstNumber + secondNumber;
        secondNumber = firstNumber - secondNumber;
        firstNumber = firstNumber - secondNumber
    }
}
console.log(firstNumber);
console.log(secondNumber);
console.log(thirdNumber);


const exam1 = 60;
const exam2 = 60;
const exam3 = 40;
let count = 0
let isPast = false


if(exam1 >= 40)count++
if(exam2 >= 40)count++
if(exam3 >= 40)count++

if(count === 3) isPast = true
if(count === 2) {
    isPast = (exam1 + exam2 + exam3) / 3 >= 50
}

const result = isPast ? "Passt": " no Passt"

console.log( result );







Task 6 
Write a program which will compute the area of a rectangular or 
a triangle after prompting the user to type the name of the figure 
name. Also check that entered numbers are positive. For the triangle 
entered numbers are height and base. 
Input                                 Output 
“triangle”, 6, 7                “Square of the triangle is 21” 
“rectangle”, 8, 5             “Square of the rectangle is 40” 
“triangle”, 0, 5                “Please enter only positives” */

/*let rectangle= true;
let triangle = true;
let result = 1;


function calcRec( height, width) {
 console.log("Please,type the name of the figure");
  if(rectangle && width > 0 && height > 0 ) {
	 result = width * height;
	console.log(`Square of the rectangle is ${result}`);
} else {
	console.log("Please enter only positives");
}
}
function calcTriangle(height,base) {
	if(triangle && base > 0 && height > 0 ) {
		result = (base * height)/2;
	   console.log(`Square of the triangle is ${result}`);
   } else {
	   console.log("Please enter only positives");
}
}
function calcArea(){

}
calcArea(calcTriangle(6,7));
calcArea(calcRec(6,7));


*/
/*let base = 5;
let height = 6;
let width = 7;
let userInput = "triangle";
let result = null;

console.log("Please,type the name of the figure");
if(userInput === "rectangle" && height > 0 && width > 0 ) {
	result = width * height;
	console.log(`Square of the rectangle is ${result}`);
} else if (userInput === "triangle" && height > 0 && base > 0 ) {
	result = (height * base)/ 2;
	console.log(`Square of the triangle is ${result}`);
} else {
	console.log("Please enter only positives");
}



let n = 5;
let result2 = 0;
for(let i = 1; i <= n;){
    result2 += 3;
    console.log(result2);
    if(result2 > 10){
     i = 6;
    }
}*/

// Используя конструкцию if..else, напишите код, 
//который будет спрашивать: „Какое «официальное» название JavaScript?“
//Если пользователь вводит «ECMAScript», то показать: «Верно!», 
//в противном случае – отобразить: «Не знаете? ECMAScript!»

/*let answer = prompt("What's the official name of JavaScript?", "");
if(answer === "Ecmascript.") {
   alert("Right");
} else {
    alert("Don't you know? It's ECMAScript");
}
*/

let num = prompt("Please, type a number", "");
if(num > 0){
    alert(1);
} else if(num < 0) {
    alert(-1);
} else {
    alert(0);
}







