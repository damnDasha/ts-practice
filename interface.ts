interface AutomobileInterface {
  //describe the data all other objects will use
  brand: string;
  speed: number;
  speedMethod(velocity: number): void;
}

const automobile: AutomobileInterface = {
  //object
  brand: "bmw",
  speed: 200,
  //implement interface into the object you see an error because speedmethod is missing
  speedMethod() {
    console.log(`this ${this.brand} is going at ${this.speed} mph`);
  },
};

function car4(automobile: AutomobileInterface) {
  //add interface to function
  console.log(`this ${automobile.brand} is going at ${automobile.speed} mph`);
  //this. pulls undefined
}
// car4(automobile);

//interface into a class
class AutomobileClass implements AutomobileInterface {
  brand: string;
  speed: number;

  speedMethod(speed) {
    console.log(`hi ${speed}`);
  }
}

let carObject = new AutomobileClass();
carObject.speedMethod(1000);

//interface inheritance
//inheriting everything below for the first interface

interface AutomobileInterface2 extends AutomobileInterface {
  brand: string;
}

const automobile2: AutomobileInterface = {
  //object
  brand: "porsche",
  speed: 200,
  //implement interface into the object you see an error because speedmethod is missing
  speedMethod() {
    console.log(`this ${this.brand} is going at ${this.speed} mph`);
  },
};

//? means optional!! add this to the first interface and there will be no errors for requirements
