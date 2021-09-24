class Tree {
  //   branch: string;
  constructor(public branch: string, public leaf: string) {
    //how do we create methods??
    this.branch = branch;
    // this.branch = branch; this is not necessary because its passed in from constructor where it is declared a string
  }

  public moveLeaf() {
    //<-- access modifier

    // this.leaf = "green leaf"; take this out and whatever parameter is passed below will show up in console
    console.log(`the ${this.leaf} is moving, also there is a ${this.branch}`);
  }

  //if its public we can access this outside of class, if private we cant, same for protected
}

let tree1 = new Tree("squirrel", "red leaf");

tree1.moveLeaf();

//calss modifiers
class Building {
  windows: string = "window1";
  escalators() {
    console.log("the escalator is moving");
  }
}

// const building = new Building();

// building.escalators();
class Building2 extends Building {
  escalators() {
    console.log("escalators moving in building 2", this.windows);
  }
}
const building2 = new Building2();

building2.escalators();
//extends overrides the moethod from the class above. we are creating a class based on the first class' definition
