export async function exercise1() {
  function simulateTask(ms: number) {
    return new Promise(resolve => setTimeout(() => resolve(`Hello Async :${ms}`), ms));
  }

  const result = await simulateTask(100);
  console.log(result);
}
