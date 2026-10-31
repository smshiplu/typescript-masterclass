// ## Task 1 — User ID
// Create a UserId type that accepts either a number or a string. Write printUserId() and handle both forms using narrowing.
{
  type UserId = number | string;

  function printUserId(id: number | string){
    if(typeof id === "number") {
      console.log(`User ID:${id.toFixed()}`);
    } else {
      console.log(`User ID:${id.toUpperCase()}`);
    }
  }
}

// ## Task 2 — Theme
// Create a literal union called Theme with "light", "dark", and "system". Create a function that accepts only those values.
{
  type Theme = "light" | "dark" | "system";

  function switchTheme(mode: Theme) {
    switch (mode) {
      case "light":
        console.log(`Light mode activated!`);
        break;
      case "dark":
        console.log(`Dark mode activated!`);
        break;
      case "system":
        console.log(`System defined mode activated!`);
        break;
    }
  }
}


// ## Task 3 — Order Status
// Create an OrderStatus literal union containing "pending", "processing", "shipped", and "delivered".
{
  type OrderStatus = "pending" | "processing" | "shipped" | "delivered"
}


// ## Task 4 — Payment Method
// Model CardPayment and UpiPayment as separate object types. Combine them into a Payment union using a literal method property. Write a function that handles each safely.
{
  type CardPayment = {
    method: "card";
    amount: number;
    cardLast4: string;
  }
  type UpiPayment = {
    method: "upi";
    amount: number;
    upiId: string;
  }

  type Payment = CardPayment | UpiPayment;

  function name(payment: Payment) {
    switch(payment.method) {
      case "card":
        return `Card Payment:${payment.cardLast4}`;
      case "upi":
        return `UPI Payment:${payment.upiId}`
    }
  }
}


// ## Task 5 — API Result
// Create a discriminated union with loading, success with a list of users, and error with an error message. Write renderState() using switch.
{
  type User = {
    id: number | string;
    name: string;
    isActive: boolean;
  }

  type ApiState = 
  | {status: "loading"}
  | {status: "success", data: User[]}
  | {status: "error", message: string}

  function renderState(state: ApiState) {
    switch (state.status) {
      case "loading":
        return "loading...";

      case "success":
         return {message: "successful!", data: state.data};

      case "error":
        return state.message
    
      default:
        break;
    }
  }
  const user: User[] = [
    {
      id: 1,
      name: "alex",
      isActive: true
    }
  ]
  const state: ApiState = {status: "success", data: user}
  const response = renderState(state);
  if(typeof response === "object") {
    console.log(response.message);
    console.log(response.data);
  }
}


// ## Task 6 — Array Challenge
// Create one variable of type (string | number)[] and another of type string[] | number[]. Add valid and invalid examples and explain why the two types behave differently.
{
  let userIds1: (string | number)[] = ["USR-101", 101]; // everything with the number and string are allowed 

  let userIds2: string[] | number[];
  userIds2 = ["USR-101", "USR-102"];
  userIds2 = [101, 102];
  // userIds2 = ["USR-101", 101] // invalid, because array element only can be either a string or a number
}


// ## Bonus — Shopping Cart State
// Design a discriminated union for a shopping cart with states such as "empty", "ready", and "checkout". Each state should contain only the data that makes sense for that state.
{
  type CartItem = {
    id: number;
    name: string;
    price: number;
    quantity: number;
  }

  type ShippingAddress = {
    address: string;
    city: string;
    zipCode: string;
  }

  type EmptyCart = {
    status: "empty";
  }

  type ReadyCart = {
    status: "ready";
    items: CartItem[];
    subtotal: number;
  }

  type CheckoutCart = {
    status: "checkout";
    items: CartItem[];
    subtotal: number;
    address: ShippingAddress;
    tax: number;
    total: number;
  }

  type ShippingCart = EmptyCart | ReadyCart | CheckoutCart;

}