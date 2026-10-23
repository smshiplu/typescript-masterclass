# Episode 02 - Assignment / Task

## Task 1 — Identify the Inferred Types

```ts
const name = "John"; // string
const age = 30; // number
const isAdmin = false; // boolean
const scores = [10, 20, 30]; // array of numbers 
const user = { // object
    name: "John", // string
    age: 30, // number
    isAdmin: false // false
};
```

Before checking your editor, predict the type of every variable. Then hover over each one and compare your answer.

## Task 2 — Add Annotations

Rewrite the variables with explicit annotations. Then compare both versions and decide which annotations add useful information and which are redundant.

```ts
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
```


## Task 3 — Function Parameters

```ts
function calculateTotal(price: number, quantity:number ) {
    return price * quantity;
}
```

Make this function type-safe by adding the appropriate parameter annotations. Let TypeScript infer the return type.

## Task 4 — Contextual Typing

```ts
const names = ["John", "Jane", "Alex"];
names.forEach(name => {
    console.log(name.toUpperCase());
});

// Here the name is a string type, and TypeScript knows that because of Contextual typing. The Contextual typing can guess that the name argument supplied has come from an array of string data containing array that has been created previously. 
```

Hover over name. Explain how TypeScript knows its type without an explicit annotation.

## Task 5 — Find the Balance

Take a small piece of existing JavaScript code and convert it to TypeScript. Do not annotate everything.
Annotate only where the type is not obvious or where the annotation communicates an important contract. Then list which types were inferred and which you chose to annotate.

```ts
function greetUser(name: string) {
    const message = "Welcome, " + name + "!";
    return message;
}
```
| TypeScript Inferred | I Choose to Annotate |
| :--- | :---: |
| The message variable's type(string) and function's return type was inferred by TypeScript | I consciously annotated the type of the name parameter is number. Because the data type of parameter was not clear understandable from outside by seeing only its name |

## Bonus Challenge

When should a TypeScript developer prefer inference, and when should they explicitly annotate a type?

Answer in your own words, without simply repeating the definitions from this video.

| When to prefer Inference  | When to prefer Annotation |
| :--- | :--- |
| <ol><li>When declaring a general variable</li><li>If it's clearly understandable what a function are returning, then it's better not to annotate return type</li><li>When there is a initial values in an array and object</li></ol> | <ol><li>When declaring a variable without assigning a value</li><li>Function parameters must be annotated</li><li>When creating an empty array, the type must be annotated explicitly</li><li>Type must be annotated in case of API response and complex obtect.</li></ol> |