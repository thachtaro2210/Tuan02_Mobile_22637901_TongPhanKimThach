export function filterEvenNumbers(arr: number[]): Promise<number[]> {
  return new Promise<number[]>((resolve) => {
    setTimeout(() => {
      const evenNumbers = arr.filter((num) => num % 2 === 0);
      resolve(evenNumbers);
    }, 1000);
  });
}


filterEvenNumbers([1, 2, 3, 4, 5, 6]).then((evenNumbers) => {
  console.log(evenNumbers); 
});
