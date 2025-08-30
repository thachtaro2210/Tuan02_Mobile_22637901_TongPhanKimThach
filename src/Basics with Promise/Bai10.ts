export const myPromise = new Promise<any>((resolve, reject) => {
  
  const success = true;
  
  if (success) {
    resolve("Success!");
  } else {
    reject("Failure!");
  }
});

myPromise
  .then(result => {
    console.log(result); 
  })
  .catch(error => {
    console.log(error); 
  })
  .finally(() => {
    console.log("Done");  
  });
