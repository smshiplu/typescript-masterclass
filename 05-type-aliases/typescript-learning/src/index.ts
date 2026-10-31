// Union Types: using this types we can define what types of data data a variable can hold. As we define number or string of userId variable, we cant store any other types of data in the userId.

let userId: number | string;
userId = 101;
userId = "USR-101";
// userId = true // it's not allowed

function printUserId(id: number | string) {
  if(typeof id === "number") {
    console.log(id.toFixed());
  } 
  if(typeof id === "string") {
    console.log(id.toUpperCase());
  }
}


// Literal Types: Creating types with the variables value. In the below example variable direction's type only can be left or right.

let direction: "left" | "right";
// direction = "up"  // it won't be allowed

let orderStatus: "pending" | "processing" | "shipped" | "delivered";
// orderStatus = "banana" // it's not allowed

// Type Aliases: Using type aliases we can completely create a new Type along with the Literal Type. In the example, OrderStatus type we can create a variable, which can only have OrderStatus type with the value of "pending" | "processing" | "shipped" | "delivered"
type OrderStatus = "pending" | "processing" | "shipped" | "delivered";

// const status: OrderStatus = "mango"; // not allowed 

type TrafficSignal = "red" | "yellow" | "green"

let signal: TrafficSignal = "red";
// signal = "black" // not allowed


type UserId = number | string;
let id1: UserId = 101;
let id2: UserId = "USR-101";

type User = {
  id: UserId;
  name: string;
  isActive: boolean;
}

function getUser(id: UserId): User {
  return {
    id: id,
    name: "alex",
    isActive: true
  }
}


// Union of Object Types & Discriminated Unions

type CardPayment = {
  method: "card";
  cardLast4: string
}
type BankTransfer = {
  method: "bank";
  accountNUmber: string
}

type Payment = CardPayment | BankTransfer;

let myPayment: Payment = {
  method: "card", 
  cardLast4 : "123456"
}

function describePayment(payment: Payment) {
  if(payment.method === "card") {
    console.log(`Card ending in : ${payment.cardLast4}`);
  } else {
    console.log(`Bank account: ${payment.accountNUmber}`);
  }
}

 

// Handling Optional Values: Union Types with Null & Undefined
function getUserName(userId: number): string | null {
  if(userId === 1) {
    return "alex"
  }
  return null;
}

const userName = getUserName(2);
if(userName !== null) {
  console.log(userName);
}

//  Arrays in TypeScript: Mixed Values vs. Homogeneous Unions
type MixedArray = (string | number)[]; // array elements can be string, number or both 
type HomogeneousArray = string[] | number[]; // array element can be either string or number

const myMixedArray: MixedArray = ["Liza", 100];
const myHomogeneousArray1: HomogeneousArray = ["Liza", "alex"];
const myHomogeneousArray2: HomogeneousArray = [20, 30];
// const myHomogeneousArray3: HomogeneousArray = ["Liza", 100]; // its not allowed


// Union (|) vs. Intersection (&)
type BasicUser = {
  name: string
}
type Employee = {
  id: number
}
type BasicUserOrEmployee = BasicUser | Employee; // (|) the value can satisfy one member of the union
type BasicUserAndEmployee = BasicUser & Employee; // (&) the value must satisfy both types



// Real-World Type 1: Multi-Provider Payment Gateway
{
  type CardPayment = {
    method: "card",
    amount: number,
    cardLast4: string
  }

  type UpiPayment = {
    method: "upi",
    amount: number,
    upiId: string
  }

  type BankPayment = {
    method: "bank",
    amount: number,
    accountNumber: string
  }

  type Payment = CardPayment | UpiPayment | BankPayment;

  function processPayment(payment: Payment) {
    switch (payment.method) {
      case "card":
        console.log(`Charging card ${payment.cardLast4}`);
        break;

      case "upi":
        console.log(`Charging UPI ${payment.upiId}`);
        break;

      case "bank":
        console.log(`Bank payment ${payment.accountNumber}`);
        break;
    }
  }
}

// Real-World Type 2: Strongly-Typed API States for React
type ApiState = 
  | {status: "loading"} 
  | {status: "success", data: User[]} 
  | {status: "error", message: string}

function render(state: ApiState) {
  switch (state.status) {
    case "loading":
      return "loading...";
      
    case "success":
      return {message: "successful!", data: state.data};

    case "error":
      return state.message
  
    default:
      return `No case matched!`;
  }
}
const user: User[] = [
  {
    id: 1,
    name: "sara",
    isActive: true
  }
]
const state: ApiState = {status: "success", data: user};

const response  = render(state);

if(typeof response === "object") {
  console.log(response.message); // successful!
  console.log(response.data); // Output: [{id: 1, name: 'sara', isActive: true}]
}
