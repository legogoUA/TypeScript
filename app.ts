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

let value: number; // || sth type

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

// --------- FIFTH(Classes)

// --> Classes in TS 

abstract class Point2Digital { //if  I wanna fordid create object class, but its have basic interface this class
/*  public x: number; // default
  private y: number; // use only here
  q: number; // use in this classes or child this class (limiting property visibility) */
  constructor(
    public x: number, 
    public y: number, 
    protected readonly q: number
  ) {  // access modifiers we can write here
    // this.x = x; // this access make default if we use any modificators like "public" in constructor
    // this.y = y;
    // this.q = q;
  }

  printPosition() {
    const { x, y } = this;

    console.log(`(${x}, ${y})`);
  }
}

const a = new Point2Digital(1, 2); // if  I wanna fordid create object class "Point2Digital" its make with modification abstract for class
a.printPosition();

console.log(a.x);  // public - I can read x anywhere 

class Point3D extends Point2Digital {
  constructor(
    x: number, 
    y: number, 
    public q = 0,
  ) {
    super(x, y);
  }

  print3DPosition() {
    const { x, y , q } = this;
    
    console.log(`(${x}, ${y}, ${q})`);
  }
}

class Place extends Point2Digital {
  constructor(public name: string, x: number, y: number) {
    super(x, y);
  }
}

console.log(a.x);
print2DInfo(a);
// craeating interface which describe objct with 2 coordinate 

interface Position2D {
  x: number;
  y: number;
}

function print2DInfo(point: Position2D) {  // using interface
  const { x, y } = point;

  console.log(`(${x}, ${y})`);
}

// how garanted for my class always contain 2 propertys?

abstract class Point2DExample implements Position2D { // use implement necessury interface
  constructor(
    // readonly x: number,  
    public y: number, 
    protected readonly q: number
  ) {}

  printPosition() {
    const { x, y } = this;

    console.log(`(${x}, ${y})`);
  }
}