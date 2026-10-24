function getSavedUserName() {
  const num = Math.floor(Math.random() * 10 ) + 1;
  if(num > 5) {
    return "Nasir";
  } else {
    return null;
  }
}
// null
const username: string | null = getSavedUserName();
username?.toLocaleUpperCase();
// or
if(username !== null) {
  username.toLocaleLowerCase();
}

// undefined
const users =["A", "B"];
const user: string | undefined = users.find(user => user === "C");
console.log(user);

// special types: any, unknown, void, never

// any
let someValue: any = "Hello";
someValue.toLocaleUpperCase();
someValue.notRealMethod();
someValue.foo.bar.buz;

// unknown: (it's always better to use "unknown" type rather than "any" when we actually really don't know the type of the data)
let dynamicValue: unknown = "hello world";
if(typeof dynamicValue === "string") {
  dynamicValue.toLocaleUpperCase()
}

// void: (Weh a function does not return any value we can explicitly annotate return type of a function that describes this function is not returning any value )
function logMessage(message: string): void {
  console.log(message);
}

// never: (when we intentionally try to stop a function execution, that possibly occurs a bug or error)
function keepAlive(): never { // this will occur a infinite loop
  while (true) {
    console.log("Heartbeat...");
  }
}

function throwError(message: string): never {
  throw new Error(message);
}




/********************* */
// ## Task 1 — Type Identification
// Write down the inferred type of every variable before hovering over it in your editor.
{
  const username = "tapas"; // string
  const age = 35; // number
  const verified = true; //boolean
  const accountId = 12345678901234567890n; //bigint
  const token = Symbol("token"); // symbol
}

// ## Task 2 — Build a User Model

// Create a TypeScript type for a user with:

// - id as a number
// - name as a string
// - isActive as a boolean
// - email that can be a string or null
// - lastLogin that can be a Date or undefined

{
  type user = {
    id: number,
    name: string,
    isActive: boolean ,
    email: string | null,
    lastLogin?: Date
  }
}

// ## Task 3 — unknown Challenge
// Make the function safely print the value only when it is a string. Then add a second branch for numbers.

function printValue(value: unknown) {
  if(typeof value === "string") {
    console.log(value);
  } else if(typeof value === "number") {
    console.log(value);
  } else {
    console.log(`${value} is not a string nor a number!`);
  }
}

// ## Task 4 — never Challenge

// Create a function called throwError that accepts a string message and always throws an Error. Give it the correct return type.

{
  function throwError(message: string): never {
    throw new Error(message);
  } 
}

// ## Task 5 — Spot the Problems
// Identify at least three problems with this code. Rewrite it using better TypeScript types. If the structure of data is genuinely unknown, explain why unknown may be preferable to any.

{
  function processUser(
  name: String,
  age: Number,
  data: any
  ) {
      return data.user;
  }
}
// Problem 1: Parameter name's type naming(String) must be in lower case.
// Problem 2: Parameter age's type naming(Number) must be in lower case.
// Problem 3: It is always better to use "unknown" than "any" because "unknown" forces the type of data to be checked, whereas "any" doesn't.

{
  function processUser(
  name: string,
  age: number,
  data: unknown
  ) {
      if(data && typeof data === "object" && "user" in data) return data?.user;
  }
}

// ## Bonus Challenge — Runtime + Type System
// Implement this using typeof checks. Try to make TypeScript narrow the value correctly in every branch.


function formatValue(value: unknown) {
    // Handle strings
    if(typeof value === "string"){}
    // Handle numbers
    else if(typeof value === "number"){}
    // Handle booleans
    else if(typeof value === "boolean"){}
    // Handle everything else
    else{}
}
