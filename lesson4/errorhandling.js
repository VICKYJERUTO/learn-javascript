try {
    // Code that may throw an error
    const result = someFunction(); // Assuming someFunction() throws an error
    console.log(result); // This line won't be executed if an error occurs
  } catch (error) {
    // Handling the error
    console.log('An error occurred:', error.message);
  }