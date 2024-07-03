const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	hamButton.classList.toggle('open');
	navigation.classList.toggle('open');
});


// Get the current date
const date = new Date();

// Format the date in the desired format
const formattedDate = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
});

// Update the DOM with the last modified date
document.getElementById('date').innerHTML = formattedDate;