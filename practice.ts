class Example {
  name: string;
}

//type lets us know what type of variable it is
let car = {
  brand: "bmw",
  engine: 3.4,
  run: function () {
    console.log("driving at 100mph");
  },
};

car.brand = "mercedes";
//if this was a number, error: type number is not assignable to type string because
// brand is a string = called type inference
//automatically assigns a type

let car1: string;

let enginge: number;

let isFast: boolean;

car1 = "nissan";
enginge = 4.5;
isFast = false;

class Car {
  brand: string;
  //etc.. the class is now set and brand will always be a string
}

let cars: any[] = ["toyota", "bmw", "mercedes"];

cars = ["nissan"]; //this is a string but the above is a string of strings,
//make it an array and it will work.
//[any] makes it work as well, otherwse it wont

let cars2: number[] = [2, 3, 4, 6];
cars2 = [4, 5, 6];

// function cal(val1: number, val2: number) {
//   let total: number = val1 + val2;
//   return total;
// }

// cal(2, 2);
