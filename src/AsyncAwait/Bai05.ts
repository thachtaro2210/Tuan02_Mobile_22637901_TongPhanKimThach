export async function simulateTask(ms: number, label: string) {
  return new Promise<string>((resolve) =>
    setTimeout(() => resolve(`Task ${label} done after ${ms}ms`), ms)
  );
}

export async function exercise15() {
  const r1 = await simulateTask(500, "A");
  console.log(r1);

  const r2 = await simulateTask(700, "B");
  console.log(r2);

  const r3 = await simulateTask(300, "C");
  console.log(r3);
}
