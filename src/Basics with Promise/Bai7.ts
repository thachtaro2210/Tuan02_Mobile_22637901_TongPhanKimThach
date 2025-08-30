
export function simulateTask7(time: number): Promise<string> {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve("Task done");
    }, time);
  });
}

Promise.race([
  simulateTask7(1000),
  simulateTask7(500),  
  simulateTask7(1500),
])
  .then((result) => {
    console.log(result); 
  })
  .catch((error) => {
    console.error("Error:", error);
  });
