// ## Task 1
// Select a DOM input using a type assertion, then implement a safer version using instanceof.
{
  // Type Assertion
  const myInput = document.getElementById("my-input") as HTMLInputElement;

  // Implementing safer version using instanceof
  const myInput2 = document.getElementById("my-input");
  if(myInput2 instanceof HTMLInputElement) {
    myInput2.value;
  }
}


// ## Task 2
// Demonstrate why "42" as number does not convert a string. Then perform the correct runtime conversion.
{
  const age =  "42" as number; //it's not converting to a number and throwing error in runtime

  const age2 = ("42" as unknown) as number; // it's still a string but not throwing error on in runtime
}


// ## Task 3
// Create an application configuration type and an object using satisfies. Add an incorrect property and observe the error.
{

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
}


// ## Task 4
// Treat parsed JSON as unknown and safely narrow it to a User type.
{
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

}