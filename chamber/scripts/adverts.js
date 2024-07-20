const members = 'https://sogiefa-12.github.io/wdd230/data/members.json';

// Fetch the data from the JSON file
fetch(members)
  .then(response => response.json())  // Convert the response to JSON format
.then(members => {
    // Filter the gold and silver members
const goldAndSilverMembers = members.filter(member => member.membership === 'gold' || member.membership === 'silver');

    // Check if there is at least one member in goldAndSilverMembers
if (goldAndSilverMembers.length > 0) {
      // Generate a random index based on the length of goldAndSilverMembers
const randomIndex = Math.floor(Math.random() * goldAndSilverMembers.length);

      // Select the member object at the random index
const spotlightMember = goldAndSilverMembers[randomIndex];

      // Update the spotlight advertisement with the selected member's name and description
const spotlightAd = document.querySelector('.spotlight-ad');
      spotlightAd.innerHTML = `<h3>${spotlightMember.name}</h3><p>${spotlightMember.description}</p>`;
    }
  })
  .catch(error => console.error('Error:', error));  // Catch and log any errors that occur during fetching
