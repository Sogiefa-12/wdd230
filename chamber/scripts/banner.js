document.addEventListener('DOMContentLoaded', () => {
    const closeButton = document.querySelector('.close');
    const banner = document.querySelector('.banner');
  
  
   
    closeButton.addEventListener('click', () => {
      
  
      // Set display to none and verify if it's applied
      banner.style.display = 'none';
      
    });
  });