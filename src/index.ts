// function hello(name: string): string {
//   return `Hello, ${name}!`;
// }

// console.log(hello("200Lab"));
import { helloAsync } from "./Basics with Promise/Bai1";

helloAsync.then((message : any) => {
  console.log(message); 
});
