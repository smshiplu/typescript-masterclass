# Episode 08 - TypeScript Generics: Intro & patterns

In this episode, we will learn about TypeScript Generics & and its usage patterns.

## Lessons Covered

- Introduction & Why TypeScript Generics Matter
- What Are Generics in TypeScript?
- The Problem: Why any Breaks Type Safety
- Writing Reusable Code with Generic Functions
- Real-World Example: Typing Generic API Responses
- Mastering Generic Constraints with the extends Keyword
- Advanced Walkthrough: Custom Types & Multiple Type Parameters
- Summary & Next Steps in Advanced TypeScript

## Task Assignment

Please find the detailed assignment and tasks in the [tasks.md](tasks.md) file.

<br>

## Task 1
Select a DOM input using a type assertion, then implement a safer version using instanceof.
```ts
  // Type Assertion
  const myInput = document.getElementById("my-input") as HTMLInputElement;

  // Implementing safer version using instanceof
  const myInput2 = document.getElementById("my-input");
  if(myInput2 instanceof HTMLInputElement) {
    myInput2.value;
  }
```

<br>

## Task 2
Demonstrate why "42" as number does not convert a string. Then perform the correct runtime conversion.
```ts
  const age =  "42" as number; //it's not converting to a number and throwing error in runtime

  const age2 = ("42" as unknown) as number; // it's still a string but not throwing error on in runtime
```

<br>

## Task 3
Create an application configuration type and an object using satisfies. Add an incorrect property and observe the error.
```ts
  type AppConfig = {
    analytics: boolean;
    notification: boolean;
    theme: "dark" | "light" | "system"
    mode: "development" | "production";
  }

  const config = {
    analytics: true,
    notification: false,
    theme: "dark",
    mode: "development",

    // ERROR: this property does not exist in the AppConfig type;
    enabled: true
  } satisfies AppConfig;
```

<br>

## Task 4
Treat parsed JSON as unknown and safely narrow it to a User type.
```ts
  type User = {
    id: number;
    name: string;
  }

  const jsonString = "{'id':'1', 'name': 'alex'}"

  const data1 = JSON.parse(jsonString); // data type is :any here
  
  const data2: unknown = JSON.parse(jsonString);

  data2.name; // name is not accessible here
  
  //type guard function which makes sure that the data is User type 
  function isUser(obj: any): obj is User {
    return (
      obj !== null && 
      typeof obj === "object" && 
      typeof obj.id === "number" && 
      typeof obj.name ===  "string"
    );
  }

  const parsedData = JSON.parse(jsonString);

  // in this narrowing block typescript knows data is a User type. 
  if(isUser(parsedData)) {
    console.log(parsedData.id);
    console.log(parsedData.name);
  }
```
