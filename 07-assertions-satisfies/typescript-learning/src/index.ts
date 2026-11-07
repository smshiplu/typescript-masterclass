// Type assertion হলো টাইপস্ক্রিপ্ট কম্পাইলারকে সরাসরি বলে দেওয়া: "আমি জানি এটি কী টাইপ, তুমি তোমার মতো জাজ করা বাদ দিয়ে আমার বলা টাইপ হিসেবে এটি ধরে নাও"।

// Syntax 
{
  let element1 = document.getElementById("canvas") as HTMLCanvasElement; // recommended way to use assertion

  let element2 = <HTMLCanvasElement>document.getElementById
 ("canvas");
}

// Example 1
{
  const input = document.getElementById("user-email") as HTMLInputElement;
  console.log(input.value); // value property accessible
}
{
  const input = document.getElementById("user-email") // not using type assertion
  // console.log(input.value); // gives error, value property accessible
}

// Example 2
{
  // ডাটাবেস বা এপিআই থেকে ডেটা আনার সময় জাভাস্ক্রিপ্ট ইঞ্জিন ডাটাবেস স্কিমা সম্পর্কে জানে না। কিন্তু টাইপ অ্যাসারশন এই শূন্যস্থান পূরণ করতে পারে।

  type User = {
    id: number,
    username: string,
  }

  const response = await fetch('/api/user/1');
  const rawData = await response.json();
  console.log(rawData.username); // it's not possible but using assertion it's possible;
  
  const user = rawData as User;
  console.log(user.username);
}

// Example 3
{
  // number and string cannot be assert type. Because there is no similarity in both data type
  
  const ageStr = "25";
  let  age = ageStr as number; 

  // we can overcome above error using unknown keyword
  age = (ageStr as unknown) as number; 
}

// Example 4 
{
  // const Assertion
  const colorsA = ["red", "green", "blue"];
  colorsA[0] = "yellow" // it's allowed

  // when we don't want to make that array mutable 
  const colorsB = ["red", "green", "blue"] as const;
  colorsB[0] = "yellow" // it's not allowed
}

/**
 * *** Satisfies ***
 */
// TypeScript-এ satisfies operator-টি কোনো ভ্যালুর নির্দিষ্ট বা ন্যারো টাইপ (narrow type) নষ্ট না করে সেটি একটি নির্দিষ্ট ইন্টারফেস বা টাইপ মেনে চলছে কি না তা যাচাই করতে ব্যবহার করা হয়।
// এক লাইনে বলতে গেলে এর মূল কথা হলো: "টাইপ চেক করো, কিন্তু টাইপ পরিবর্তন করো না।"

// Example 1: 
{
  type User = {
    id: number | string;
  }

  const user1: User = {
    id: 12345
  }

  user1.id.toFixed(); // problem: because id can be a number or a string both 

  //  but we can fix that by using satisfies
  const user2 = {
    id: 12345
  } satisfies User;

  user2.id.toFixed(); // no problems here
}

// Example 2
{
  type FeatureConfig = {
    enabled: boolean;
    maxRetry: number;
    mode: "development" | "production"
  }

  type AppSetting = {
    analytics: boolean | FeatureConfig;
    authentication: boolean | FeatureConfig;
    notification: boolean | FeatureConfig;
  }

  const currentSettings1: AppSetting = {
    analytics: true,
    authentication: false,
    notification: {
      enabled: true,
      maxRetry: 3,
      mode: "development"
    }
  }

  currentSettings1.notification.maxRetry * 2; // Problem: notification can be boolean as well as FeatureConfig type. So if notification is FeatureConfig then maxRetry exist but when notification is a boolean that time there is no maxRetry. But is we can solve the problems using narrowing technique, means checking the existence and the type of notification. If the type is FeatureConfig we can use it otherwise no. But if we don't want to do extra checking, we can use satisfies

  const currentSettings2 = {
    analytics: true,
    authentication: false,
    notification: {
      enabled: true,
      maxRetry: 3,
      mode: "development"
    }
  } satisfies AppSetting;

  currentSettings2.notification.maxRetry * 2; // No Problem: because of satisfies

  // সুতরাং, যখন আমাদের 'অ্যানোটেশন' (annotation) অথবা 'স্যাটিসফাইস' (satisfies)-এর মধ্যে কোনো একটি বেছে নিতে হয়, তখন আমাদের নিশ্চিত হতে হবে যে আমরা ডেটার ধরনটি জানি। যদি আমরা ডেটার ধরন সম্পর্কে নিশ্চিত হই, তবে আমরা 'স্যাটিসফাইস' (satisfies) ব্যবহার করতে পারি।
}