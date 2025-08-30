// function hello(name: string): string {
//   return `Hello, ${name}!`;
// }

// console.log(hello("200Lab"));
import { helloAsync } from "./Basics with Promise/Bai1";
import { getTenAfterOneSecond } from "./Basics with Promise/Bai2";

helloAsync.then((message : any) => {
  console.log(message); 
});
// Bai 02
getTenAfterOneSecond().then((result:any) => {
  console.log(result); 
});