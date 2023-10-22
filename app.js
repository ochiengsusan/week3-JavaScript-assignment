//1.Copy the code and past on your IDE. Convert the value to a number Without removing any part of the code, let it print out 45 as a number and not as a string.
//const number = “45”.
const number= "45";
const num=Number("45");
console.log(num);

//2.Copy the codes  Print the sum of numbers without removing any part of the code, but add the solution to the code that fixes the bug of sum in a String concatenation.
//Const printSum = “20” + 40. //let the result print 60. //*hint: 60.*

const printSum = Number("20") +40
console.log(printSum);

//Const sentence = “I am “ +23 + 4 + “years old”. //*hint: “I am 27 years old”*
const sentence = ("I am" + Number(23 + 4) + "years old");
console.log(sentence);

//Copy the code below and paste on your IDE, find the bug in the code below and fix it.
let myValue = ("May");
myValue = 86;// the code could not run initialy because it was assigned a constant value
console.log(myValue);

//4.Declare three camel case variables of your first name, last name, guru coding course, test score and initialize them with the right values. 

  let firstName = ('Susan');
   let lastName = ('Ochieng');
   let guruCodingCourse = ('javaScript');
  let testCourse = ('A');

 console.log('I am' + firstName + ''+''+lastName +'taking'+guruCodingCourse+'and my testCouse is' + testCourse );
//5.Using a switch statement or If-else condition. The average scores of a JavaScript test is:
 const susanTestScoreIs = 80; 
switch(true){
    case 'susanTestScoreIs below 30':
        console.log('failed');
    break;
   
    case 'susanTestScoreIs >=31  and susanTestScoreIs <=40 ':
    console.log("E");
    break;
   
    case 'susanTestScoreIs>=41 and susanTestScoreIs<=49':
        console.log("D");
    break; 

 case 'susanTestScoreIs>=50 and susanTestScoreIs<=59':
        console.log("C");
    break; 

    case 'susanTestScoreIs>=60 and susanTestScoreIs<=69':
        console.log("B");
    break; 

    case 'susanTestScoreIs>=70':
        console.log("A");
    break; 

    case 'susanTestScoreIs>=101':
        console.log("out of range");
    break; 

    case 'susanTestScoreIs=anything negative':
        console.log("no test score");
    break; 
}

//6.Write a program, that will count from 1 to 20. Explaining in details each section of the code in comments.
let count = 1; 
for( ;count<=20;){
    console.log(count);//1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20
    count++
}
