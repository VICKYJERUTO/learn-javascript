// Create a promise
const myPromise = new Promise((resolve, reject) => {
    // Simulate an asynchronous operation
    setTimeout(() => {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        resolve(randomNumber); // Resolve the promise with a value
      } else {
        reject(new Error('Random number is greater than 0.5')); // Reject the promise with an error
      }
    }, 2000); // Simulate a delay of 2 seconds
  });
  
  // Use the promise
  myPromise
    .then((result) => {
      console.log('Promise resolved with result:', result);
    })
    .catch((error) => {
      console.log('Promise rejected with error:', error);
    });