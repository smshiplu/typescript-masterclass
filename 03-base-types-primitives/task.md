# Episode 03 - Assignment / Task

## Task 1 — Type Identification

```ts
const username = "tapas";
const age = 35;
const verified = true;
const accountId = 12345678901234567890n;
const token = Symbol("token");
```

Write down the inferred type of every variable before hovering over it in your editor.

## Task 2 — Build a User Model

Create a TypeScript type for a user with:

- id as a number
- name as a string
- isActive as a boolean
- email that can be a string or null
- lastLogin that can be a Date or undefined

```ts
  type user = {
    id: number,
    name: string,
    isActive: boolean ,
    email: string | null,
    lastLogin?: Date
  }
```

## Task 3 — unknown Challenge

```ts
function printValue(value: unknown) {
    // Your code here
    if(typeof value === "string") {
        console.log(value);
    } else if(typeof value === "number") {
        console.log(value);
    } else {
        console.log(`${value} is not a string nor a number!`);
    }
}
```

Make the function safely print the value only when it is a string. Then add a second branch for numbers.

## Task 4 — never Challenge

Create a function called throwError that accepts a string message and always throws an Error. Give it the correct return type.

```ts
  function throwError(message: string): never {
    throw new Error(message);
  } 
```

## Task 5 — Spot the Problems

```ts
function processUser(
name: String,
age: Number,
data: any
) {
    return data.user;
}

// Problem 1: Parameter name's type naming(String) must be in lower case.
// Problem 2: Parameter age's type naming(Number) must be in lower case.
// Problem 3: It is always better to use "unknown" than "any" because "unknown" forces the type of data to be checked, whereas "any" doesn't.

  function processUser(
  name: string,
  age: number,
  data: unknown
  ) {
      if(data && typeof data === "object" && "user" in data) return data?.user;
  }

```

Identify at least three problems with this code. Rewrite it using better TypeScript types. If the structure of data is genuinely unknown, explain why unknown may be preferable to any.

## Bonus Challenge — Runtime + Type System

```ts
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
```

Implement this using typeof checks. Try to make TypeScript narrow the value correctly in every branch.