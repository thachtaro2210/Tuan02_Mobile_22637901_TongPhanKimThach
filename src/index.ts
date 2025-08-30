// function hello(name: string): string {
//   return `Hello, ${name}!`;
// }

// console.log(hello("200Lab"));
import { exercise1 } from "./AsyncAwait/Bai01";
import { filterEvenNumbers } from "./Basics with Promise/Bai09";
import { helloAsync } from "./Basics with Promise/Bai1";
import { myPromise } from "./Basics with Promise/Bai10";
import { getTenAfterOneSecond } from "./Basics with Promise/Bai2";
import { rejectPromiseAfterOneSecond } from "./Basics with Promise/Bai3";
import { getRandomNumber } from "./Basics with Promise/Bai4";
import { simulateTask } from "./Basics with Promise/Bai5";
import { simulateTasks } from "./Basics with Promise/Bai6";
import { simulateTask7 } from "./Basics with Promise/Bai7";
import { addFive, double, square } from "./Basics with Promise/Bai8";


helloAsync.then((message : any) => {
  console.log(message); 
});
// Bai 02
getTenAfterOneSecond().then((result:any) => {
  console.log(result); 
});
//Bai03

rejectPromiseAfterOneSecond().catch((error: any) => {
  console.log(error);
});
//Bai04

// getRandomNumber();
// //Bai05
// simulateTask(1000).then(console.log); 
// //Bai06
// simulateTasks(10);
// //Bai07
// simulateTask7(1000);
//Bai08
square(2);
double(4);
addFive(3);
//Bai09
// filterEvenNumbers(2,3,4,5,6);
filterEvenNumbers([1, 2, 3, 4, 5, 6,12,18,30,24]).then((evenNumbers) => {
  console.log(evenNumbers); 
});
//Bai10
myPromise
  .then(result => {
    console.log(result); 
  })
  .catch(error => {
    console.log(error); 
  })
  .finally(() => {
    console.log("Done");  
  });

  // async await
  exercise1();