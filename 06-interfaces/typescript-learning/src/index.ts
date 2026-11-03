// ১. Interface কী? (interface)

// interface মূলত কোনো অবজেক্টের (Object) গঠন বা শেপ (Shape) কেমন হবে তা সংজ্ঞায়িত করার জন্য তৈরি করা হয়।
// • ডিক্লেয়ারেশন: interface কি-ওয়ার্ড ব্যবহার করে লেখা হয়।
// • এক্সটেন্ড (Extend): extends কি-ওয়ার্ড দিয়ে অন্য ইন্টারফেস থেকে প্রোপার্টি উত্তরাধিকার সূত্রে পাওয়া যায়।
// • ডিক্লেয়ারেশন মেুর্জিং (Declaration Merging): একই নামে একাধিক interface তৈরি করলে টাইপস্ক্রিপ্ট সেগুলোকে স্বয়ংক্রিয়ভাবে একত্রিত (merge) করে ফেলে।
// • কী কী সাপোর্ট করে: সাধারণত অবজেক্ট এবং ফাংশন শেপের জন্য সেরা।

// উদাহরণ:
{
  interface User {
    name: string;
    age: number;
  }

  // Declaration Merging উদাহরণ:
  interface User {
    email: string; // User ইন্টারফেসে email প্রোপার্টি যুক্ত হয়ে যাবে
  }
}


// ২. Type Alias কী? (type)

// type কি-ওয়ার্ড ব্যবহার করে যেকোনো ধরনের টাইপের জন্য একটি নতুন নাম (alias) তৈরি করা যায়। এটি ইন্টারফেসের চেয়ে বেশি ফ্লেক্সিবল।
// • ডিক্লেয়ারেশন: type কি-ওয়ার্ড ব্যবহার করে লেখা হয়।
// • প্রিমিটিভ ও ইউনিয়ন টাইপ: এটি দিয়ে শুধু অবজেক্ট নয়, বরং প্রিমিটিভ টাইপ (যেমন string, number), ইউনিয়ন টাইপ (string | number), টিউবলস (tuples) এবং ইন্টারসেকশন (&) খুব সহজে লেখা যায়।
// • ইন্টারসেকশন (Intersection): একাধিক টাইপ জোড়া দিতে & অপারেটর ব্যবহার করা হয়।
// • ডিক্লেয়ারেশন মেুর্জিং: সাপোর্ট করে না (একই নামে একাধিক টাইপ ডিক্লেয়ার করলে এরর দিবে)।

// উদাহরণ:

{
  // প্রিমিটিভ ও ইউনিয়ন টাইপ
  type ID = string | number;

  // অবজেক্ট টাইপ
  type User = {
    name: string;
    age: number;
  };
}


// ৪. কখন কোনটা ব্যবহার করবেন?

// • Interface ব্যবহার করবেন:
// 	• যখন কোনো অবজেক্টের শেপ বা ক্লাস কন্ট্রাক্ট তৈরি করতে চান।
// 	• যখন কোনো থার্ড-পার্টি লাইব্রেরি বা পাবলিক এপিআই তৈরি করছেন যেখানে পরবর্তীতে ইউজাররা এক্সটেন্ড বা ডিক্লেয়ারেশন মেুর্জিং করতে পারে।
// • Type Alias ব্যবহার করবেন:
// 	• যখন ইউনিয়ন (string | number), ইন্টারসেকশন, টিউবল বা প্রিমিটিভ টাইপ নিয়ে কাজ করবেন।
// 	• রিঅ্যাক্ট (React) কম্পোনেন্টের Props এবং State লেখার ক্ষেত্রে অনেক ডেভেলপার type ব্যবহার করতে পছন্দ করেন


/* 
******************************
*/

// Type Alias
type UserId = number | string;

// Custom Type: creating Custom type with Type Alias
type User = {
  id: UserId;
  name: string;
  email: string;
}

// Interface
interface AUser {
  id: number;
  name: string; 
  email: string;
}

// Instance from AUser Interface
const user: AUser = {
  id: 1,
  name: "alex",
  email: "test@test.com"
}

// Interface and Type Aliases - The similarity: 
// ইন্টারফেস ও টাইপ এলিয়েসের প্রোপার্টি গুলো একই হতে পারে
// ইন্টারফেস ডিক্লারেশনের সময় কোনো ইকুয়াল সাইন ব্যাবহার করতে হয় না 
// ইন্টারফেস ডিক্লারেশনের সময় শুধু Product ব্যাবহার করা হয়েছে
// টাইপ এলিয়েস ডিক্লারেশনের সময় ProductType ব্যাবহার করা হয়েছে


interface Product {
  id: number;
  name: string;
  price: number;
}

type ProductType = {
  id: number;
  name: string;
  price: number;
}

// The first Big Difference - What they can represent?
type Id = string | number;
type Status = "pending" | "success" | "error";
type Formatter = (value: string) => string;
type Pair = [string, number];

// Extending an Interface with Extend
interface Person {
  name: string;
}

interface Employee extends Person { 
  employeeId: number
}

const employee: Employee = { // creating an instance with employee Interface
  name: "alex",
  employeeId: 10
}

// Extending Multiple Interfaces: 

interface HasName { 
  name: string;
}
interface HasEmail {
  email: string
}
interface Contact extends HasName, HasEmail {
  phone: string
}

const contact: Contact = {
  name: "john",
  email: "john@email.com",
  phone: "123456789"
}

{
  // Type Alias Version of Extending Multiple Interfaces
  type HasName = string;
  type HasEmail = string;
  type Contact = {
    name: HasName,
    email: HasEmail,
    phone: string
  }
  const contact: Contact = {
    name: "Bob",
    email: "bob@email.com",
    phone: "0123456789"
  }
}

// Can Interfaces Extends Type Aliases?
type Animal = {
  name: string
}

interface Mammal extends Animal {
  hands: number
} 

const human: Mammal = {
  name: "human",
  hands: 2
} 


// Can a Typ Alias use a Interface?
interface UserProfile {
  name?: string;
  readonly email: string
}

type AdminProfile = UserProfile & {
  adminScience: Date;
}

const admin: AdminProfile = {
  // name: "Alice",
  email: "alice@email.com",
  adminScience: new Date()
}

// admin.email = "test@test.com" // its not allowed because of readonly


// Classes, Interfaces and Implements
// TypeScript-এ implements কীওয়ার্ডটি ব্যবহার করা হয় যখন কোনো Class (ক্লাস) কোনো Interface (ইন্টারফেস) বা অন্য কোনো ক্লাসের স্ট্রাকচার বা নিয়ম মেনে চলতে বাধ্য থাকে।
// সহজ কথায়, একটি ইন্টারফেসে যে যে প্রোপার্টি (property) এবং মেথড (method) ডিফাইন করা থাকে, কোনো ক্লাস যদি সেই ইন্টারফেসকে implements করে, তবে ওই ক্লাসটিকে অবশ্যই সেই প্রোপার্টি এবং মেথডগুলো নিজের ভেতর তৈরি (implement) করতে হবে। যদি না করা হয়, তবে TypeScript কম্পাইল করার সময় এরর (Error) দেখাবে।

interface Logger {
  log(message: string): void;
}

class ConsoleLogger implements Logger {
  log(message: string): void {
    console.log(message);
  }
}

const logger = new ConsoleLogger()
logger.log("Hello!");


// When to Use Which: A Practical example
{
  type ProductIdType = number | string;
  type ProductStatusType = "published" | "draft" | "archived"

  interface Product {
    id: ProductIdType;
    name: string;
    price: number;
    status: ProductStatusType
  }

  interface DigitalProduct extends Product { //this is the norms
    downloadUrl: string
  }

  type PhysicalProduct = Product & { // if I want to make another type alias(literal or union types) with the all property of Product
    weightInGrams: number
  }

  const ebook: DigitalProduct = { // making an instance 
    id: "ebook-101",
    name: "TypwScript Mestery",
    price: 300,
    status: "published",
    downloadUrl: "http://"
  }

  const mouse: PhysicalProduct = { // making aninstance
    id: 101,
    name: "A4Tech",
    price: 500,
    status: "draft",
    weightInGrams: 150
  }

}