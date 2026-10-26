/***************************
 * ARRAY
*/

// DECLARATION BY SUBSCRIPT
const names: string[] = ["Alice", "Bob", "John"];
const scores: number[] = [30, 20, 25, 10];
const flags: boolean[] = [false, true, true, false];

// GENERIC TYPE ARRAY DECLARATION
const allNames: Array<string> = ["Ron", "Sarah"];
const allScores: Array<number> = [20, 50]

// const items = []; // this type of array declaration is not recommended
const items: string[] = [] // instead of before this type declaration is recommended 

//READONLY ARRAY
function printNames(names: readonly string[]) {
  console.log(names.join(",")); // this is allowed, because it wont mutate the array
  // names.push("alex"); // this is not allowed, because this will modify the array
}

// ARRAY UNION
const mixedArray = [20, "Alex", true] // typescript can infer that this is a mixed type array
const mixedType2:(string | number | boolean)[] = [20, "Bob", true]; // we can explicitly tell to typescript that what type of data an array should contain.

mixedType2.push("Shiplu");
mixedType2.push(100);
mixedType2.push(false);
// mixedType2.push(new Date()); // it wont be allowed.

/***************************
 * OBJECT
*/
type User = {
  id: number,
  name: string,
  isActive: boolean
}

function logMyUser(user: User) {
  // console.log(user.address); // typescript forbid to access unassigned property
}

// When creating an object from User type then every property must be used. if any property is not provided, typescript will occur error
const user1: User = {
  id: 1,
  name: "John",
  isActive: true
}

type Emp = {
  id: number,
  name: string,
  email?: string
}

// When emp object will be created there will be an optional property which is email.
const emp1: Emp = {
  id: 1,
  name: "Doe",
}

/***************************
 * NESTED OBJECT
*/
type Address = {
  city: string,
  country: string
}

type Artist = {
  name: string,
  address: Address
}

const address1: Address = {
  city: "Dhaka",
  country: "Bangladesh"
}
console.log(address1.city + " " + address1.country);

const artist1: Artist = {
  name: "John",
  address: address1
}
console.log(artist1); // { name: 'John', address: { city: 'Dhaka', country: 'Bangladesh' } }


/***************************
 * ARRAY AND OBJECT TOGETHER
*/
type Product = {
  id: number,
  name: string,
  price: number
}

const myProduct: Product[] = [
  {id: 1, name: "Laptop", price: 100000},
  {id: 2, name: "Keyboard", price: 5000}
]
myProduct.push({id: 3, name: "Mouse", price: 2000});


/***********************
 * EXCESS PROPERTY CHECK
*/
type Dept = {
  id: number,
  name: string
}

function saveDept(dept: Dept) {
  // Save here
}
saveDept({
  id: 1, 
  name: "finance", 
  // address: "Bangladesh" // it will occur error
});

/*********************
 * STRUCTURAL TYPING
*/

type Point = {
  x: number,
  y: number
}

const coordinates = {
  x: 100,
  y: 30,
  label: "Origin"
}

function printPoint(point: Point) {
  console.log(point.x, point.y);
}
printPoint({x: 100, y: 20});

printPoint(coordinates);
// TypeScript structural type system (বা structural subtyping)-এর কারণে printPoint ফাংশনটি কোনো সমস্যা ছাড়াই coordinates অবজেক্টটিকে গ্রহণ করছে।
// সহজ ভাষায়, TypeScript ডেটার আকার বা গঠন (Shape) দেখে সিদ্ধান্ত নেয়, তার নাম কী বা অন্য কোনো অতিরিক্ত প্রোপার্টি আছে কিনা তা দেখে নয়। একে অনেক সময় "Duck Typing"-ও বলা হয় (যদি কোনো পাখি হাঁসের মতো দেখতে হয় এবং হাঁসের মতো প্যাক প্যাক করে, তবে সেটিই হাঁস)।

// এখানে পুরো বিষয়টি যেভাবে কাজ করছে:

// ১. কাঠামোগত মিল (Structural Matching)

// • printPoint ফাংশনটি এমন একটি অবজেক্ট চায় যার টাইপ Point। অর্থাৎ, অবজেক্টটিতে অবশ্যই x: number এবং y: number থাকতে হবে।
// • আপনার তৈরি করা coordinates অবজেক্টটির ভেতর x: number এবং y: number দুটোই আছে।
// যেহেতু Point টাইপের জন্য প্রয়োজনীয় সব শর্ত coordinates অবজেক্টটি পূরণ করেছে, তাই TypeScript এটিকে বৈধ হিসেবে ধরে নেয়।

// ২. অতিরিক্ত প্রোপার্টি (Excess Properties)

// আপনার মনে প্রশ্ন জাগতে পারে, coordinates-এ তো অতিরিক্ত একটি label প্রোপার্টি আছে, তাও কেন এরর দিল না?
// TypeScript-এর নিয়ম অনুযায়ী, কোনো অবজেক্টকে যখন অন্য কোথাও অ্যাসাইন (Assign) করা হয়, তখন যদি তার ভেতর কাঙ্ক্ষিত সব প্রোপার্টি থাকে, তবে অতিরিক্ত প্রোপার্টি থাকলেও কোনো সমস্যা নেই। printPoint ফাংশনটি শুধু x এবং y নিয়ে কাজ করবে, আর label প্রোপার্টিটিকে সে উপেক্ষা (ignore) করবে।


// একটি গুরুত্বপূর্ণ ব্যতিক্রম (Excess Property Checking)

// আপনি যদি coordinates ভ্যারিয়েবলটি আলাদাভাবে তৈরি না করে, সরাসরি ফাংশনের ভেতরেই অবজেক্ট লিটারেল (Object Literal) হিসেবে পাস করতেন, তাহলে কিন্তু TypeScript এরর দিত। যেমন:

// এটি এরর (Error) দেখাবে!
// printPoint({ x: 100, y: 30, label: "Origin" });

// কারণ: সরাসরি অবজেক্ট লিটারেল পাস করলে TypeScript Excess Property Checking সচল করে। সে মনে করে আপনি হয়তো ভুল করে এমন কিছু পাস করছেন যা ফাংশনটিতে ব্যবহারই হবে না। কিন্তু যখন আপনি আগে একটি ভ্যারিয়েবল (coordinates) ঘোষণা করে সেটি পাস করেন, তখন TypeScript শুধু সেটির স্ট্রাকচার বা গঠন চেক করে।


/****************** 
 * TUPLES
*/
const address: [string, number] = ["Bangladesh", 1550];
const userEntry: [string, number] = ["John", 30];
const someName = userEntry[0];
const someAge = userEntry[1];

type Coordinates = [number, number, number?];

const point2d: Coordinates = [20, 10];
const point3d: Coordinates = [30, 20, 10];
// const point4d: Coordinates = [30, 20, 10, 5]; // it's not allowed

// REST EXAMPLE

type Commands = [string, number, ...boolean[]];

const a: Commands = ["New", 1, true];
const b: Commands = ["Save", 2, true, true];
// const c: Commands = ["Edit", 3, true, true, true, 1]; // it will occur error, because only boolean value is allowed 

// READONLY TUPLE
type Box = readonly [number, number];
const box1: Box = [30, 20];
// box1[0] = 10; // it will forbide to change the tuple


// CUSTOM HOOK THAT RETURNING AN TUPLE
function useToggle(initialValue:boolean): [boolean, ()=> void] {
  let state = initialValue;
  const toggle = () => (state = !state);
  return [state, toggle];
}

// CONSUMING HOOK BY DESTRUCTURING
const [toggleModal, setToggleModal] = useToggle(false);

// API RESPONSE
type ApiResponse = [statusCode: number, statusMessage: string];

const apiResponse: ApiResponse = [404, "Not found"]