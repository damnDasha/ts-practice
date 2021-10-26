var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var People = /** @class */ (function () {
    function People() {
    }
    People.prototype.displayDate = function () {
        console.log("some data");
    };
    return People;
}());
var Kids = /** @class */ (function (_super) {
    __extends(Kids, _super);
    function Kids() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Kids;
}(People));
var KidsClass = new Kids();
KidsClass.displayDate();
//abstract class used for inheritance where other classes may derive from them
//generics: reusable components . creating a component that can work over
//a veriety of types rather than one
function displayData(someData) {
    return someData;
}
console.log(displayData("this is a data string"));
