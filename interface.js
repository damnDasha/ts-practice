var automobile = {
    //object
    brand: "bmw",
    speed: 200,
    //implement interface into the object you see an error because speedmethod is missing
    speedMethod: function () {
        console.log("this " + this.brand + " is going at " + this.speed + " mph");
    }
};
function car4(automobile) {
    //add interface to function
    console.log("this " + automobile.brand + " is going at " + automobile.speed + " mph");
    //this. pulls undefined
}
// car4(automobile);
//interface into a class
var AutomobileClass = /** @class */ (function () {
    function AutomobileClass() {
    }
    AutomobileClass.prototype.speedMethod = function (speed) {
        console.log("hi " + speed);
    };
    return AutomobileClass;
}());
var carObject = new AutomobileClass();
carObject.speedMethod(1000);
var automobile2 = {
    //object
    brand: "porsche",
    speed: 200,
    //implement interface into the object you see an error because speedmethod is missing
    speedMethod: function () {
        console.log("this " + this.brand + " is going at " + this.speed + " mph");
    }
};
//? means optional!! add this to the first interface and there will be no errors for requirements
