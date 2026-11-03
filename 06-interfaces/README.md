# Episode 06 - Interfaces

In this episode, we will learn about the Interfaces.

## Lessons Covered

- Introduction: Interfaces vs Type Aliases
- Defining an Interface & Object Shape
- Similarities: Interfaces vs Type Aliases
- Key Differences: What Can They Represent?
- Extending Interfaces
- Extending Multiple Interfaces
- Can Interfaces Extend Type Aliases?
- Using Interfaces in Type Aliases (Intersections)
- Optional and Readonly Modifiers
- Using `implements` with Classes
- Compile-time vs Runtime in TypeScript
- When to Choose Interface vs Type Alias
- Practical Example: Combining Both
- Practice Tasks & Wrap-Up

## Interface VS. Type Alias

| Capability | Interface | Type Alias |
| --- | --- | --- |
| Object shapes | Yes | Yes |
| Unions | Not directly | Yes |
| Literal unions | Not directly | Yes |
| Tuples | Not directly | Yes |
| Function types | Callable interface syntax | Yes |
| Generics | Yes | Yes |
| `extends` | Yes | No; use composition |
| Declaration merging | Yes | No |
| Class `implements` | Common | Compatible object-like aliases can be implemented |

## Task Assignment

Please find the detailed assignment and tasks in the [tasks.md](tasks.md) file.

<br>

## Task 1 — Convert an Object Type
Take an object type alias called Customer and rewrite it as an interface. Add readonly and optional properties where appropriate.
```ts
  type Customer = {
    readonly id: number | string;
    name: string;
    nickname?: string;
    readonly email: string;
  }

  interface ACustomer {
    readonly id: number | string;
    name: string;
    nickname?: string;
    readonly email: string;
  }
```

<br>

## Task 2 — Interface Extension
Create Person and Employee interfaces. Make Employee extend Person and add at least two employee-specific properties.
```ts
  interface Person {
    name: string;
    age: number;
  }

  interface Employee extends Person {
    empId: number |string;
    email: string;
    dept: string
  }

  const employee: Employee = {
    empId: "nsr-101",
    name: "john",
    age: 30,
    email: "john@email.com",
    dept: "marketing"
  }
```

<br>

## Task 3 — Type Composition
Create HasAddress and HasContact type aliases. Build a Customer type using an intersection.
```ts
  type HasAddress = string;
  type HasContact = string

  type Customer = HasAddress & HasContact & {
    name: string;
  }
```

<br>

## Task 4 — Union Choice
Create a PaymentMethod type using a literal union. Explain in a comment why a type alias is a natural choice here instead of an interface.
```ts
  type PaymentMethod = "card" | "bank" | "cod";
  // A type alias is the natural choice here because interfaces in TypeScript 
  // are designed to define object shapes (contracts for classes or objects). 
  // They cannot be used to directly represent a union of primitive literal values.
```

<br>

## Task 5 — Mixed Model
Build a small product model using both interfaces and type aliases. Use an interface for Product, aliases for ProductId and ProductStatus, and interface extension or an intersection for specialized product types.
```ts
  type ProductId = number | string;
  type ProductStatus = "published" | "draft" | "archived";

  interface Product {
    id: ProductId;
    name: string;
    price: number;
    status: ProductStatus;
  }

  // extension of Product interface
  interface DigitalProduct extends Product {
    downloadUrl: string;
  }
  // instance
  const ebook: DigitalProduct = {
    id: "ebook-101",
    name: "TypeScript Mastery",
    price: 250,
    status: "published",
    downloadUrl: "http://"
  }


  // intersection with Product interface
  type PhysicalProduct = Product & {
    weightInGrams: number;
  }
  // instance
  const keyboard: PhysicalProduct = {
    id: 101,
    name: "Wireless keyboard",
    price: 1000,
    weightInGrams: 700,
    status: "draft"
  }
```

## Bonus — Design Decision
Pick one real project you have worked on. Identify three object types and decide whether each should be an interface or type alias. Write one sentence explaining each decision.