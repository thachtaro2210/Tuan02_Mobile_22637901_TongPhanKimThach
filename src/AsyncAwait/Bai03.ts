export async function exercise3() {
    function simulateTask(ms: number, shouldFail = false) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (shouldFail) {
                    reject(new Error(`Task failed after ${ms}ms`));
                } else {
                    resolve(`Task success after ${ms}ms`);
                }
            }, ms);
        });
    }
    try {
        const result1 = await simulateTask(500);
        console.log(result1);

        const result2 = await simulateTask(300, true);
        console.log(result2);
    } catch (error) {
        if (error instanceof Error) {
            console.error("Caught error:", error.message);
        } else {
            console.error("Caught error:", error);
        }

    } 
}
