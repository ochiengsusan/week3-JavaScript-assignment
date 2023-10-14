//1.Copy the code and past on your IDE. Convert the value to a number Without removing any part of the code, let it print out 45 as a number and not as a string.
//const number = “45”.
let num = '45';
Number(num);
console.log(num);

//2.Copy the codes  Print the sum of numbers without removing any part of the code, but add the solution to the code that fixes the bug of sum in a String concatenation.
//Const printSum = “20” + 40. //let the result print 60. //*hint: 60.*

//const num1 = "20"
//const num2 = 40;
//result=(num1 + num2);//since num1 is a string, the result is the two numbers put together(2040) and not the sum(60)
//num1 = 20;// and changing num1 to a number brings an error since it was initially declared as a constant
//console.log(result);
// for results to be 60, we need to declare num1 as a variable

//Const sentence = “I am “ + 23 + 4 + “years old”. //*hint: “I am 27 years old”*
//const sentence = ("I am" + 23 + 4 + "years old");
//console.log(sentence);

//Copy the code below and paste on your IDE, find the bug in the code below and fix it.
//const myVaue = ("May");
//myValue = 86;
//console.log(myValue);

//4.Declare three camel case variables of your first name, last name, guru coding course, test score and initialize them with the right values. 
//const person = {
   // firstName : (Susan),
   // lastName : (Ochieng),
   // guruCodingCourse : (javaScript),
  //  testCourse : ('A'),
//}
 
//5.Using a switch statement or If-else condition. The average scores of a JavaScript test is:
 const testScoreIs = 80; 
switch(true){
    case 'testScoreIs below 30':
        console.log('failed');
    break;
    case 'testScoreIs >=31  and testScoreIs <=40 ':
    console.log("E");
    break;
   
    case 'testScoreIs>=41 and testScoreIs<=49':
        console.log("D");
    break; 

 case 'testScoreIs>=50 and testScoreIs<=59':
        console.log("C");
    break; 

    case 'testScoreIs>=60 and testScoreIs<=69':
        console.log("B");
    break; 

    case 'testScoreIs>=70':
        console.log("A");
    break; 

    case 'testScoreIs>=101':
        console.log("out of range");
    break; 

    case 'testScoreIs=anything negative':
        console.log("no test score");
    break; 
}

//6.Write a program, that will count from 1 to 20. Explaining in details each section of the code in comments.
let count = 0; 
for( ;count<=20;){
    console.log(count);//1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20
    count++
}
