abstract class People {
  displayDate() {
    console.log("some data");
  }
}

class Kids extends People {}
let KidsClass = new Kids();
KidsClass.displayDate();

//abstract class used for inheritance where other classes may derive from them
//Abstract classes cannot be instantiated. An Abstract class has at least one abstract method.
//To use an abstract class, you need to inherit it and provide the implementation for the
//abstract methods.

//generics: reusable components . creating a component that can work over
//a veriety of types rather than one

function displayData<TYPE>(someData: TYPE) {
  return someData;
}

// function displayData2(someData: number) {
//   return someData;
// }

// function displayData3(someData: string) {
//   return someData;
// }
//^^ this is annoying. generic types avoid this

console.log(displayData(821731897));

//how to make classes generic
let array1: number[] = [2, 98723, 23872];
let array2: Array<string> = ["askdjhak", "askhdak"]; //this is generic

class objectGenericsClass<TYPE1, TYPE2> {
  constructor(public value1: TYPE1, public value2: TYPE2) {}
}
let object1 = new objectGenericsClass<string, number>("hello", 892379e72);
let object2 = new objectGenericsClass<boolean, number>(true, 3);

//constraints
//<TYPE 2 extends string>
//add string as the second parameter in the let object.. above
