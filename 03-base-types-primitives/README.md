# Episode 03 - Base Types Primitives

In this episode, we will learn about the base types in TypeScript.

## Lessons Covered

- Introduction & Why Base Types Matter
- Core Primitives: string, number, and boolean
- Primitive Types vs Wrapper Objects (string vs String)
- null vs undefined & strictNullChecks
- Handling Nullable Types, Optional Chaining & Guards
- bigint and symbol
- The any Type: Pitfalls and Use Cases
- The unknown Type: Safe Alternatives to any
- The void Return Type
- The never Type & Exhaustive Type Checks
- Hands-on Coding Tasks & Challenges
- Summary & Next Steps

## Quick Decision Guide

| Situation | Usually use |
| --- | --- |
| Text string | `string` |
| Normal JavaScript number | `number` |
| `true` / `false` | `boolean` |
| Very large exact integer | `bigint` |
| Unique primitive identity | `symbol` |
| Explicitly absent value | `null` |
| Missing / not provided | `undefined` |
| Unknown external data | `unknown` |
| Function with no useful return | `void` |
| Code path that cannot complete normally | `never` |
| Avoiding type checking | `any` — use sparingly |

## Useful Feature Comparisons

### 1. string VS. String

| Feature | `string` (Lowercase) | `String` (Uppercase) |
| --- | --- | --- |
| Type Category | Primitive | Object (Wrapper) |
| Memory Allocation | Saved directly on the stack (Highly efficient) | Stored on the heap (Higher overhead) |
| Usage Recommendation | Always use this | Avoid entirely for typing |
| Example Declaration | `let name: string = "Alice";` | `let name: String = new String("Alice");` |

### 2. any VS. unknown

| Feature | `any` | `unknown` |
| --- | --- | --- |
| What can be assigned into it? | Anything (strings, objects, functions, etc.) | Anything (strings, objects, functions, etc.) |
| What can it be assigned to? | Any other type (except `never`) | Only to `unknown` or `any` |
| Can you read properties/methods? | Yes, completely unchecked (Highly dangerous) | No, blocked until you prove the type |
| Safety Level | 🔴 Unsafe (Bypasses the compiler) | 🟢 100% Type-Safe |

### 3. void VS. any VS, never

| Type | What it actually means | Real-world example |
| --- | --- | --- |
| `void` | The function completes, but returns no useful data. | `console.log()` |
| `any` | The value could be absolutely anything. Turn off safety rules. | Migrating messy legacy JS code. |
| `never` | The value cannot exist / The code path cannot be reached. | Functions that crash or loop forever. |

## Task Assignment

Please find the detailed assignment and tasks in the [tasks.md](tasks.md) file.


## Task 1 — Type Identification

```ts
const username = "tapas"; // string
const age = 35; // number
const verified = true; //boolean
const accountId = 12345678901234567890n; //bigint
const token = Symbol("token"); // symbol
```

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
Make the function safely print the value only when it is a string. Then add a second branch for numbers.

```ts
function printValue(value: unknown) {
  if(typeof value === "string") {
    console.log(value);
  } else if(typeof value === "number") {
    console.log(value);
  } else {
    console.log(`${value} is not a string nor a number!`);
  }
}
```

## Task 4 — never Challenge

Create a function called throwError that accepts a string message and always throws an Error. Give it the correct return type.

```ts
  function throwError(message: string): never {
    throw new Error(message);
  } 
```

## Task 5 — Spot the Problems

Identify at least three problems with this code. Rewrite it using better TypeScript types. If the structure of data is genuinely unknown, explain why unknown may be preferable to any.

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


## Bonus Challenge — Runtime + Type System
Implement this using typeof checks. Try to make TypeScript narrow the value correctly in every branch.

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


