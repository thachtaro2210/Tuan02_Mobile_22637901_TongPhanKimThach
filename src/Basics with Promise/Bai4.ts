export function getRandomNumber(): Promise<number> {
  return new Promise<number>((resolve, reject) => {
    const randomNumber = Math.random(); 
    if (randomNumber > 0.5) {
      resolve(randomNumber); 
    } else {
      reject("Random number is too low!"); 
    }
  });
}


getRandomNumber()
  .then((number) => {
    console.log("Random number:", number); 
  })
  .catch((error) => {
    console.log("Error:", error); 
  });
