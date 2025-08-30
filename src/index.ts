// function hello(name: string): string {
//   return `Hello, ${name}!`;
// }

// console.log(hello("200Lab"));
import { helloAsync } from "./Basics with Promise/Bai1";
import { getTenAfterOneSecond } from "./Basics with Promise/Bai2";
import { rejectPromiseAfterOneSecond } from "./Basics with Promise/Bai3";
import { getRandomNumber } from "./Basics with Promise/Bai4";
import { simulateTask } from "./Basics with Promise/Bai5";
import { simulateTasks } from "./Basics with Promise/Bai6";


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

getRandomNumber();
//Bai05
simulateTask(1000).then(console.log); 
//Bai06
simulateTasks(10);