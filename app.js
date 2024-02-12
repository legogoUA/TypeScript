"use strict";
// --------- FIRST
// we need TypeScript for castumizing types variables, functions || classes && object
// > npm install -g typescript
// tsc app.ts
// tsc --init  ---> ініціалізація TS в поточній директирії
// tsconfig.json
// "files": ["./app.ts"],
// tsc -p tsconfig.json
// tsc -p tsconfig.json --watch  /* sth like npm start */
// --------- SECOND(BasicTypes)
// ---> Primitive Types and Arrays 
let value; // || sth type
value = 123;
let age = 25;
let firstName = 'John';
let isMarried = false;
let wife = null;
let empty = undefined;
let people = [];
people.push(12);
// Typing of simple types and arrays
// ---> Fuctions
function add(x, y = 0 /*default type number*/) {
    return; // undefined only 
    // return x + y;
}
const result = add(2, 3);
console.log(result);
const subtrack = (x, y) => {
    return x - y;
};
const multuply = (x, y) => {
    return x * y;
};
// --------- THIRD(AdvancedTypes)
// ---> Custom and Union Types
let myAge = 26;
let productId = 12345;
const availableProductIds = [];
const selectedProductIds = [];
function isSelected(id, products) {
    return products.includes(id);
}
function printProduct(id) {
    console.log(`Product#${id}`);
}
printProduct(productId);
const [role, ourAge, hasGroup = false] = ['coach', 35, true]; // desctructuring to different variables
var PizzaSize2;
(function (PizzaSize2) {
    PizzaSize2["small"] = "small";
    PizzaSize2["medium"] = "medium";
    PizzaSize2["large"] = "large";
})(PizzaSize2 || (PizzaSize2 = {}));
let size = PizzaSize2.small;
console.log(size);
size = 'small';
console.log(size);
size = 'medium';
console.log(size);
const pointA = {
    x: 0,
    y: 1,
    z: '2',
};
const pointAA = {
    x: 0,
    y: 1,
    z: 2,
};
const pointAAA = {
    x: 0,
    y: 1,
    z: 2,
};
// my type including all propertioes 'interface'
const pointAAAA = {
    x: 0,
    y: 1,
    z: 2,
};
pointAAAA.y = 12; //x will be readonly
function test(a) { }
function test1(a) { } // all properties without property 'z'
function test2(a) { } // send only 'z'
function test3(a) { } // sth propertyes like in my type, but don't diferent ( key only from types PointX)
function test4(a) { } // required
function test5(a) { } // readonly
test({
    x: 0,
    y: 1,
    z: 2,
});
// how review type or interface -- for variables or string
function test7(a) { } // readonly
test7('x'); // xyz - sth another will make error
// --------- FIFTH(Classes)
// --> Classes in TS 
/*abstract*/ class Point2Digital {
    /*  public x: number; // default
      private y: number; // use only here
      q: number; // use in this classes or child this class (limiting property visibility) */
    constructor(x, y, q) {
        this.x = x;
        this.y = y;
        this.q = q;
        // this.x = x; // this access make default if we use any modificators like "public" in constructor
        // this.y = y;
        // this.q = q;
    }
    printPosition() {
        const { x, y, q } = this;
        console.log(`(${x}, ${y}, ${q})`);
    }
}
const a = new Point2Digital(1, 2, 3); // if  I wanna fordid create object class "Point2Digital" its make with modification abstract for class
a.printPosition();
console.log(a.x); // public - I can read x anywhere 
class Point3D extends Point2Digital {
    constructor(x, y, q = 0) {
        super(x, y, q);
    }
    print3DPosition() {
        const { x, y, q } = this;
        console.log(`(${x}, ${y}, ${q})`);
    }
}
class Place extends Point3D {
    constructor(name, x, y) {
        super(x, y);
        this.name = name;
    }
}
console.log(a.x);
print2DInfo(a);
function print2DInfo(point) {
    const { x, y } = point;
    console.log(`(${x}, ${y})`);
}
// how garanted for my class always contain 2 propertys?
class Point2DExample {
    constructor(x, y, q) {
        this.x = x;
        this.y = y;
        this.q = q;
    }
    printPosition() {
        const { x, y } = this;
        console.log(`(${x}, ${y})`);
    }
}
// --------- SIXTH(Generic Types)
// --> Generic Types
const field = document.querySelector('input');
console.dir(field);
