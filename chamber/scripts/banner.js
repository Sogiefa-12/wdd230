document.addEventListener('DOMContentLoaded', () => {
    const closeButton = document.querySelector('.close');
    const banner = document.querySelector('.banner');
  
    // Add console logs to verify element selection
    console.log('Close Button:', closeButton);
   
    closeButton.addEventListener('click', () => {
      
  
      // Set display to none and verify if it's applied
      banner.style.display = 'none';
      
    });
  });