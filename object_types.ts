let vehicle: { brand: string; engineType: number } = {
  brand: "ford",
  engineType: 4.3,
};

vehicle.brand = "nissan";

//union types:
let unionType: number | string | boolean; //or operatior joins multiple types in one

unionType = "string";
unionType = 34;

unionType = false;
