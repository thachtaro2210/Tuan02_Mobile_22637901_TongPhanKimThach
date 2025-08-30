export async function excercise2(){
    function simulateTask(ms: number) {
    return new Promise(resolve => setTimeout(() => resolve(`Hello Async bai 02 :${ms}`), ms));
  }

  const result = await simulateTask(2000);
  console.log(result);
}