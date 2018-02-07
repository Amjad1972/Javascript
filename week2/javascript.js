//Question #1
function sum(a, b, c) {
    return a + b + c;
}
console.log(sum(1 ,2 ,3));

//Question #2 

function colorCar(color) {
    return "a " + color + " car";
}
console.log(colorCar("blue"));

//Question #3

function vehicleType(color) {
    if (vehicleType = "blue", 2){
        return "a " + color + " motorbike";
    }
}
console.log(vehicleType("blue", 2));

//Question #4

console.log(3==3);

//Question #5

function vehicle(color, age, type) {
    const carAge = {
        "1":"new",
        "2":"used"
    },
          carType = {
         "1":"car",
         "2":"motorbike"
    };
    return " a" + color + " " + carAge[age] + " " + carType[type];
}
console.log(vehicle("blue", 1, 1));
console.log(vehicle("blue", 2, 1));

//Question #6 & #7

let vehicles = ["motorbike", "caravan", "bike", "jeep"];
console.log(vehicles[2]);

//Question #8 

function vehicle(color, age, type) {
    const carAge = {
        "1":"old",
        "2":"used",
        "3":"new"
    },
          carType = {
         "1":"caravan",
         "2":"car",
         "3":"motorbike"
    };
     return "a " + color  + " " + carAge[age]  + " " + carType[type];
}

console.log(vehicle(" green ", 3, 1));

//Question #9

let ads = "Amazing Joe's Garage, we service, ";
let vehicle = [" cars " ,  " motorbikes " , " caravans " , " bikes "];
console.log(ads + " " + vehicle.join());

//Question #10

let ads = "Amazing Joe's Garage, we service, ";
let car = [" cars " , " motorbikes " , " caravans " , " bikes "];
car = car.push(" jeep ");
console.log(ads + " " + car.join());

//Question #11

 var x = [1,2,3];
 var y = [1,2,3];
 var z = y;
What do you think will happen with x == y, x === y and z == y and z == x? */

console.log (x == y); //Answer is false
console.log (x === y); //Answer is false
console.log (z == y); //Answer is true
console.log (z == x); //Answer is false

//Question #12

let bar = 42; 
typeof typeof bar; */

"string" 
//because when write console.log its read it from right to left (rtl)
typeof typeof bar --> typeof (typeof bar) --> typeof ( "number" ) --> string


































