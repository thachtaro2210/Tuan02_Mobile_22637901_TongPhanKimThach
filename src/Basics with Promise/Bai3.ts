export function rejectPromiseAfterOneSecond(): Promise<never> {
  return new Promise<never>((_, reject) => {
    setTimeout(() => {
      reject("Co 1 vai cai khong dung");
    }, 1000);
  });
}
