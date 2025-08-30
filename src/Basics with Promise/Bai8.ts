export function square(num: number): Promise<number> {
  return new Promise<number>((resolve) => {
    resolve(num * num);
  });
}

export function double(num: number): Promise<number> {
  return new Promise<number>((resolve) => {
    resolve(num * 2);
  });
}

export function addFive(num: number): Promise<number> {
  return new Promise<number>((resolve) => {
    resolve(num + 5);
  });
}

square(2)
  .then((result) => double(result))
  .then((result) => addFive(result))
  .then((result) => {
    console.log(result); 
  })
  .catch((error) => {
    console.error("Error in chain:", error);
  });
