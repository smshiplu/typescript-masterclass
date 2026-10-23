# Episode 02 - Type Annotations & Type Inference

In this episode, we will learn about Type Annotations & Type Inference.

## Lessons Covered

- 00:00 - Introduction: TypeScript Masterclass (Episode 02)
- Course Resources, GitHub Repo & Discord Community
- Type Annotations vs. Type Inference Explained
- How to Write Type Annotations for Variables & Functions
- Return Type Annotations & Array Types
- Compile-time Type Checking (Real-World Analogy)
- How TypeScript Type Inference Works Under the Hood
- Intuitive Real-Life Analogy for Type Inference
- Uninitialized Variables: `let` vs. `const`
- Why Function Parameters Don't Infer (Implicit `any` Danger)
- When to Use Explicit Return Types (API Contracts & Guards)
- Flow Inference & Object Type Inference
- What is Contextual Typing in TypeScript?
- Contextual Typing with DOM Events & Arrays
- Best Practices: When to Annotate vs. When to Infer
- What’s Coming Next in the Masterclass!

## When to use Type Annotation and Inference

| Scenario / Code Context | Use Inference | Use Annotation | Why? |
| :--- | :---: | :---: | :--- |
| **Simple Local Variables** <br>`const count = 10;` | **Yes** | ❌ | TypeScript already knows the exact type from the value. Annotations just add clutter. |
| **Uninitialized Variables** <br>`let data;` | ❌ | **Yes** | Without an initialization value, TypeScript defaults to `any`. You must declare the intended type. |
| **Function Parameters** <br>`function greet(name) {}` | ❌ | **Yes** | TypeScript cannot look ahead to guess what arguments will be passed into a function. |
| **Function Return Types** <br>`function getAge(): number` | Optional | **Best Practice** | It creates a strict contract. If you accidentally change the logic inside the function, TypeScript will alert you immediately. |
| **Inline Callbacks / Array Methods** <br>`items.map(x => x)` | **Yes** | ❌ | **Contextual typing** takes care of this automatically by looking at the parent array's type. |
| **Object Literals (Strict Forms)** <br>`const user: User = { ... }` | ❌ | **Yes** | Prevents spelling mistakes in keys and stops you from accidentally adding extra, invalid properties. |
| **Destructuring** <br>`const { id } = product;` | **Yes** | ❌ | The properties are pulled directly from a typed object, so their types carry over automatically. |
| **Dynamic Web APIs / JSON** <br>`JSON.parse(string)` | ❌ | **Yes** | Functions like `JSON.parse` or `fetch` return `any`. You must manually cast or annotate them to regain safety. |

## Task Assignment

Please find the detailed assignment and tasks in the [tasks.md](tasks.md) file.


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

## Task 4 — Contextual Typing
Hover over name. Explain how TypeScript knows its type without an explicit annotation.

```ts
{
  const names = ["John", "Jane", "Alex"];
  names.forEach(name => {
    console.log(name.toUpperCase());
  });

  // Here the name is a string type, and TypeScript knows that because of Contextual typing. The Contextual typing can guess that the name argument supplied has come from an array of string data containing array that has been created previously. 
}
```

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
| :--- | :--- |
| The message variable's type(string) and function's return type was inferred by TypeScript | I consciously annotated the type of the name parameter is number. Because the data type of parameter was not clear understandable from outside by seeing only its name |

## Bonus Challenge

When should a TypeScript developer prefer inference, and when should they explicitly annotate a type?

Answer in your own words, without simply repeating the definitions from this video.

| When to prefer Inference  | When to prefer Annotation |
| :--- | :--- |
| <ol><li>When declaring a general variable</li><li>If it's clearly understandable what a function are returning, then it's better not to annotate return type</li><li>When there is a initial values in an array and object</li></ol> | <ol><li>When declaring a variable without assigning a value</li><li>Function parameters must be annotated</li><li>When creating an empty array, the type must be annotated explicitly</li><li>Type must be annotated in case of API response and complex obtect.</li></ol> |