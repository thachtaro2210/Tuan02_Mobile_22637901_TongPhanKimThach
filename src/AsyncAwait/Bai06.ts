import { exercise15 } from "./Bai05"; 

async function simulateTask(ms: number, label: string) {
  return new Promise<string>((resolve) =>
    setTimeout(() => resolve(`Task ${label} done after ${ms}ms`), ms)
  );
}

export async function exercise6() {
  const results = await Promise.all([
    simulateTask(500, "X"),
    simulateTask(700, "Y"),
    simulateTask(300, "Z"),
  ]);
  console.log(results);
}
