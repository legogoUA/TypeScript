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
