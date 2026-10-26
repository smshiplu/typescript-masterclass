// ## Task 1 — Product Catalog

// Create a Product type with id: number, name: string, price: number, category: string, tags: string[], and an optional discount: number. Then create an array containing at least five products.
{
  type Product = {
    id: number,
    name: string,
    price: number,
    category: string,
    tags: string[]
  }

  const products: Product[] = [
    {
      id: 1,
      name: "laptop",
      price: 100000,
      category: "electronics",
      tags: ["computer", "gadgets", "electronics", "device"]
    },
    {
      id: 2,
      name: "keyboard",
      price: 5000,
      category: "electronics",
      tags: ["computer", "gadgets", "electronics", "device"]
    },
    {
      id: 3,
      name: "mouse",
      price: 2000,
      category: "electronics",
      tags: ["computer", "gadgets", "electronics", "device"]
    },
    {
      id: 4,
      name: "smart phone",
      price: 20000,
      category: "electronics",
      tags: ["computer", "gadgets", "electronics", "device"]
    },
    {
      id: 5,
      name: "smart tv",
      price: 100000,
      category: "electronics",
      tags: ["computer", "gadgets", "electronics", "device"]
    }
  ]

}


// ## Task 2 — Make It Readonly

// Make Product.id readonly. Try assigning a new id after creation and observe the compiler error.
{
  type Product = {
   readonly id: number,
    name: string
  }

  const product: Product = {id: 1, name: "laptop"}

  // product.id = 10 // it's not allowed because of readonly property


  function printProduct(product: readonly Product[]) {
    if(product[0]) {
      // product[0].id = 10 // Cannot assign to 'id' because it is a read-only property.
    }
  } 
}


// ## Task 3 — Tuple Challenge

// Create an ApiResponse tuple representing an HTTP status code, response message, and success flag. Create two valid responses and one invalid response.
{
  type ApiResponse = [statusCode: number, statusMessage: string, success: boolean];
  const apiResponse1 = [200, "success", true];
  const apiResponse2 = [200, "success", true];
  const apiResponse3 = [404, "Not found", false];
}


// ## Task 4 — Optional Tuple

// Create a Optional Tuple coordinate tuple supporting either 2D or 3D coordinates.

// Write a function that prints x and y and prints z only when it exists.

{
  type Coordinates = [x:number, y:number, z?:number];
  const point2d: Coordinates = [30, 10];
  const point3d: Coordinates = [50, 20, 15];

  function printCoordinates(coords: Coordinates) {
    const [x, y, z] = coords;
    console.log(`X:${x} - Y:${y}`);
    if(z || z !== undefined) {
      console.log(`Z:${z}`);
    }
  }
}


// ## Task 5 — readonly API

// Create a function that accepts a readonly array of numbers and calculates the average. The function should not mutate the array.

{
  function calculateAverage(numbers: readonly number[]): number {
    if(numbers.length === 0) return 0;
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    const average =  sum /numbers.length;
    return average;
  }
}


// ## Task 6 — Refactor a Tuple

// Refactor this using an object type. Explain why the object version may be easier for another developer to understand.
{
  type User = [number, string, boolean];
  function printUser(user: User) {
    console.log(user[0], user[1], user[2]);
  }

  // Object version
  type User = {
    id: number,
    name: string,
    isActive: boolean
  }

  // The object version is more convenient than tuple version, reasons are explained below.
  // 1. Self explanatory naming: it is hard to find the meaning of user[0], user[1] or user[2]. Rather than in object version's property naming like id, name or isActive are more understandable than tuple's index.

  // 2. Lower chances to make mistake: In case of using tuple, a developer must keep in mind that what data according to the array index. But in object, there is no need to remember any sequences of properties.
}


// ## Bonus Challenge — Real API Model

// Design types for an e-commerce order containing an order id, customer information, an array of products, an optional coupon code, a shipping address, and an order total. Create smaller reusable types such as
// Customer, Product, Address, and Order.
{
  type Customer = {
    id: number;
    name: string;
    email: string;
    phoneNumber: number;
  }

  type Product = {
    id: number;
    name: string;
    price: number;
    quantity: number;
  }

  type Address = {
    city: string;
    postalCode: number;
    country: string;
  }

  // Order type
  type Order = {
    id: number;
    customer_information: Customer;
    products: Product[];
    shipping_address: Address;
    order_total: number;
  }

  // creating an order
  const order: Order = {
    id: 1,
    customer_information: {id: 1, name: "john", email: "test@test.com", phoneNumber: +88012345678},
    products: [
      {
        id: 1,
        name: "laptop",
        price: 100000,
        quantity: 1
       }
    ],
    shipping_address: {
      city: "Dhaka",
      postalCode: 1215,
      country: "Bangladesh"
    },
    order_total: 5000
  }
}

