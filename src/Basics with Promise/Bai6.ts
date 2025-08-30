export function simulateTasks(time: number): Promise<string> {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve("Task done");
    }, time);
  });
}

Promise.all([
  simulateTasks(1000),
  simulateTasks(1500),
  simulateTasks(2000),
])
  .then((results) => {
    console.log(results); 
  })
  .catch((error) => {
    console.error("Error:", error);
  });


