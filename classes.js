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
var Tree = /** @class */ (function () {
    //   branch: string;
    function Tree(branch, leaf) {
        this.branch = branch;
        this.leaf = leaf;
        //how do we create methods??
        this.branch = branch;
        // this.branch = branch; this is not necessary because its passed in from constructor where it is declared a string
    }
    Tree.prototype.moveLeaf = function () {
        //<-- access modifier
        // this.leaf = "green leaf"; take this out and whatever parameter is passed below will show up in console
        console.log("the " + this.leaf + " is moving, also there is a " + this.branch);
    };
    return Tree;
}());
var tree1 = new Tree("squirrel", "red leaf");
tree1.moveLeaf();
//calss modifiers
var Building = /** @class */ (function () {
    function Building() {
        this.windows = "window1";
    }
    Building.prototype.escalators = function () {
        console.log("the escalator is moving");
    };
    return Building;
}());
// const building = new Building();
// building.escalators();
var Building2 = /** @class */ (function (_super) {
    __extends(Building2, _super);
    function Building2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Building2.prototype.escalators = function () {
        console.log("escalators moving in building 2", this.windows);
    };
    return Building2;
}(Building));
var building2 = new Building2();
building2.escalators();
//extends overrides the moethod from the class above. we are creating a class based on the first class' definition
