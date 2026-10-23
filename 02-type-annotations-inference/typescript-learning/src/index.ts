// ## Task 1 — Identify the Inferred Types
{
  const name = "John"; // string
  const age = 30; // number
  const isAdmin = false; // boolean
  const scores = [10, 20, 30]; // array of numbers 
  const user = { // object
    name: "John", // string
    age: 30, // number
    isAdmin: false // false
  };
}

// ## Task 2 — Add Annotations
// Rewrite the variables with explicit annotations. Then compare both versions and decide which annotations add useful information and which are redundant.
{
  const name: string = "John";
  const age: number = 30;
  const isAdmin: boolean = false;
  const scores: number[] = [10, 20, 30];
  const user: object = { 
    name: "John", 
    age: 30,
    isAdmin: false
  };
  // Writing explicit type annotations like : string or : number on primitive const variables is considered unnecessary redundant in TypeScript, because the assigned value already proves the type
}

// ## Task 3 — Function Parameters
// Make this function type-safe by adding the appropriate parameter annotations. Let TypeScript infer the return type.
{
  function calculateTotal(price: number, quantity: number) {
    return price * quantity;
  }
}

// ## Task 4 — Contextual Typing
// Hover over name. Explain how TypeScript knows its type without an explicit annotation.
{
  const names = ["John", "Jane", "Alex"];
  names.forEach(name => {
    console.log(name.toUpperCase());
  });

  // Here the name is a string type, and TypeScript knows that because of Contextual typing. The Contextual typing can guess that the name argument supplied has come from an array of string data containing array that has been created previously. 
}

// ## Task 5 — Find the Balance

// Take a small piece of existing JavaScript code and convert it to TypeScript. Do not annotate everything.
// Annotate only where the type is not obvious or where the annotation communicates an important contract. Then list which types were inferred and which you chose to annotate.
{
  function greetUser(name: string) {
    const message = "Welcome, " + name + "!";
    return message;
  }

  // The message variable's type(string) and function's return type was inferred by TypeScript 

  // I consciously annotated the type of the name parameter is number. Because, the data type of parameter was not clearly understandable from outside by seeing only its name 
}