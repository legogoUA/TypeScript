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

let value: any; // || sth type

value = 123;

let age = 25;
let firstName = 'John';
let isMarried = false;
let wife: null | string = null;
let empty = undefined;

let people: number[] = [];

people.push(12);

// Typing of simple types and arrays

// ---> Fuctions

function add(x: number, y = 0 /*default type number*/): void {  // void = function don't return any value  <-- y?:  ? = don't required parametr -->
  return; // undefined only 
  // return x + y;
}

const result = add(2, 3);

console.log(result);

type Callback = (x: number, y: number) => number;

const subtrack: Callback = (x, y) => {
  return x - y;
}

const multuply = (x: number, y: number): number => {
  return x * y;
}

// --------- THIRD(AdvancedTypes)

// ---> Custom and Union Types
let myAge: number = 26;

 type ProductId = number;
 let productId: ProductId = 12345;

 const availableProductIds: ProductId[] = [];
 const selectedProductIds: ProductId[] = [];

 function isSelected(id: ProductId, products: ProductId[]): boolean {
  return products.includes(id);
 }

 function printProduct(id: ProductId) {
  console.log(`Product#${id}`);
 }

 printProduct(productId);

 // ---> Tuple

type UserData = [string, number, boolean?];
const [role, ourAge, hasGroup = false]: UserData = ['coach', 35, true]; // desctructuring to different variables
// like this we are use tuples


// In React this type return for us hook useState(); first param - variables ; second param - function for creating this variable

// ---> Enum and literal types

type PizzaSize = 'small' | 'medium' | 'large';


enum PizzaSize2 {
  small = 'small',
  medium = 'medium', 
  large = 'large',
}

let size: PizzaSize = PizzaSize2.small;
console.log(size);

size = 'small';
console.log(size);

size = 'medium';
console.log(size);

// --------- FOURTH(ObjectTypes)

// ---> Object Types and Interfaces

type PointType = {
  x: number;
  y: number;
  z: number;
}

interface PointInterface { //desctiption type object with this key
  x: number;
  y: number;
  z: string;
}

const pointA: PointInterface = {
  x: 0,
  y: 1,
  z: '2',
}

type Collection = {
  [key: string]: number,
}

const pointAA: Collection = {
  x: 0,
  y: 1,
  z: 2,
}

// Types___ : object = for !primitiveValues

type Point2D = {
  x: number;
  y: number;
}

interface Point extends Point2D { //desctiption type object with this key
  z: number;
}

const pointAAA: Point = {
  x: 0,
  y: 1,
  z: 2,
}

// or diferent situation 

interface Point2D1 { //desctiption type object with this key
  readonly x: number; // readonly
  y: number;
}

type PointX = Point2D1 & {
  z: number;
}

// my type including all propertioes 'interface'

const pointAAAA: PointX = {
  x: 0,
  y: 1,
  z: 2,
}

pointAAAA.y = 12; //x will be readonly

function test(a: PointX) {}
function test1(a: Omit<PointX, 'z'>) {} // all properties without property 'z'
function test2(a: Pick<PointX, 'z'>) {} // send only 'z'
function test3(a: Partial<PointX>) {} // sth propertyes like in my type, but don't diferent ( key only from types PointX)
function test4(a: Required<PointX>) {} // required
function test5(a: Readonly<PointX>) {} // readonly

test({
  x: 0,
  y: 1,
  z: 2,
})

// how review type or interface -- for variables or string

function test7(a: keyof PointX) {} // readonly

test7('x'); // xyz - sth another will make error


