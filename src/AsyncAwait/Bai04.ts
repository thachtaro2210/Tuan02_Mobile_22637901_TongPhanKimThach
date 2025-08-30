export async function exercise4(num: number) {
  function wait(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  await wait(1000); 
  return num * 3;
}


(async () => {
  const result = await exercise4(5);
  console.log(`Day la bai 14 :`+result); 
})();
