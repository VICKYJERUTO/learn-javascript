setTimeout(()=>{
    console.log('this code will run every 2000 milliseconds(2 seconds).');
},2000);
  
  
  
  const intervalId = setInterval(() => {
    console.log('This code will run every 1000 milliseconds (1 second).');
  },1000);
  

  function animate() {
    // Code for animation goes here
    requestAnimationFrame(animate);
  }
  // Start the animation
  animate();