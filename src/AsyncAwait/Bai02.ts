export async function excercise2(){
    function simulateTask(ms: number[]) {
    return new Promise(async resolve => {
        for (const t of ms){
            await new  Promise(r => setTimeout(r,t));
            console.log(`Helo bai 2 :${t}` );
            
        }
        resolve("Done");
    }
    );
  }

  const result = await simulateTask([100,299,300]);
  console.log(result);
}