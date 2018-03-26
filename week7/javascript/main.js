//Step 5: More map, filter, reduce, and =>

//1- Say you would like to write a program that doubles the odd numbers in an array and throws away the even number.

//Your solution could be something like this:
//We can reach the same results using for loop or forEach :

//let numbers = [1, 2, 3, 4];
//let newNumbers = [];
//for(let i = 0; i < numbers.length; i++) {
//  if(numbers[i] % 2 !== 0){
//    newNumbers.push(numbers[i] * 2)
//  }
//}
//console.log( "The doubled numbers are" , newNumbers);

//rewrite the above program using map and filter don't forget to use =>

//We can write code with this way using one line by filter, map and =>

/*let numbers = [1, 2, 3, 4];
let otherNum = numbers => numbers % 2 !== 0;
const newNumbers = numbers.filter(otherNum).map(number => number * 2);
console.log("The doubled numbers are",newNumbers); //[2,6]*/

//We can write above code in other way using two lines :

/*let newNumbers = numbers
.filter((number) => number % 2 !== 0)
.map((number) => number * 2);
console.log("The doubled numbers are",newNumbers); //[2,6]*/


//2-Use the array of the previous assignment, write a program that add the even numbers to the resulting array twice, //but the odd numbers only once. Don't forget to use =>.

/*let newNumbers = numbers.reduce(function(total, number){
  total.push(number);
  if(number % 2 == 0) {
    total.push(number);
  }
	return total;
}, []);

console.log("The final numbers are", newNumbers); // [1, 2, 2, 3, 4, 4]*/

//3-Underneath you see a very interesting small insight in Maartje's work:

let monday = [
        {
            name     : 'Write a summary HTML/CSS',
            duration : 180
        },
        {
            name     : 'Some web development',
            duration : 120
        },
        {
            name     : 'Try to convince teachers to fix homework class10',
            duration : 30
        },
        {
            name     : 'Fix homework for class10 myself',
            duration : 20
        },
        {
            name     : 'Talk to a lot of people',
            duration : 200
        }
    ];
 
let tuesday = [
        {
            name     : 'Keep writing summery',
            duration : 240
        },
        {
            name     : 'Some more web development',
            duration : 180
        },
        {
            name     : 'Staring out the window',
            duration  : 10
        },
        {
            name     : 'Talk to a lot of people',
            duration : 200
        },
        {
            name     : 'Look at application assignments new students',
            duration : 40
        }
    ];
     
let tasks = [monday, tuesday];
//Write a program that does the following:

//1) Collect two days' worth of tasks.

const worthMonday = [];
const worthTuesday = [];
//this way by using for loop 
//for(let i = 0; i < monday.length; i++){
// const e = monday[i];
// worthmonday.push(e.name);
//}
//We can use other method more easy and short than above :
const e = monday;
monday.filter(e =>  worthMonday.push(e.name));
console.log(worthMonday);

const b = tuesday;
tuesday.filter(b =>  worthTuesday.push(b.name));
console.log(worthTuesday);

//2) Convert the task durations to hours, instead of minutes :

const hourMonday = [];
const hourTuesday = [];

monday.map(e => hourMonday.push(e.duration / 60));
console.log(hourMonday);

tuesday.map(b => hourTuesday.push(b.duration / 60));
console.log(hourTuesday);

//3) Filter out everything that took two hours or more :

//for Monday
console.log (
monday.filter((e) => e.duration >= 120));

//for Tuesday
console.log (
tuesday.filter((b) => b.duration >= 120));

//4) Sum it all up :

//sum for Monday
const sumMonday = [];
monday.filter(e => sumMonday.push(e.duration));
const totalSum = sumMonday.reduce((total, hours) => total + hours, 0);
console.log("Total sum duration in hours for monday is " + totalSum / 60);

//for Tuesday
const sumTuesday = [];
tuesday.filter(b => sumTuesday.push(b.duration));
const totalSum2 = sumTuesday.reduce((total, hours) => total + hours, 0);
console.log("Total sum duration in hours for tuesday is " + totalSum2 / 60);

//Total for both monday and tuesday :
const totalFees = ((totalSum + totalSum2) / 60 ) ;
console.log("Total sum duration in hours for both days is "  + totalFees);

//5) Multiply the result by a per-hour rate for billing (you can decide yourself what Maartje should make per hour):
//6) Output a formatted Euro amount:

//Fees amount for monday if we suppose that fees will be 7 euro per hour :
const feesMon = Math.round((totalSum / 60) * 7);
console.log("Total amount fees for monday are " + feesMon + " Euro");

//Fees amount for tuesday if we suppose that fees will be 7 euro per hour :
const feesTue = Math.round((totalSum2 / 60) * 7);
console.log("Total amount fees for tuesday are " + feesTue + " Euro");

//Fees amount for both two days if we suppose that fees will be 7 euro per hour :
const feesTotal = feesMon + feesTue;
console.log("Total amount fees for two days are " + feesTotal + " Euro");












































