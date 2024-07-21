// URL to fetch the JSON data
const membersUrl = 'https://sogiefa-12.github.io/wdd230/data/members.json';
fetch(membersUrl)
  .then(response => response.json())  // Convert the response to JSON format
.then(members => {
    // Filter the gold and silver members
const goldAndSilverMembers = members.filter(member => member.membership.toUpperCase() === 'GOLD' || member.membership.toUpperCase() === 'SILVER');

    // Check if there are enough gold and silver members to fill the spotlight ads
if (goldAndSilverMembers.length >= document.querySelectorAll('.spotlight-ad').length) {
      // Select all elements with the "spotlight-ad" class
const spotlightAds = document.querySelectorAll('.spotlight-ad');

      spotlightAds.forEach((spotlightAd, index) => {
        // Generate a random index based on the length of goldAndSilverMembers
const randomIndex = Math.floor(Math.random() * goldAndSilverMembers.length);

        // Select the member object at the random index
const spotlightMember = goldAndSilverMembers[randomIndex];
        goldAndSilverMembers.splice(randomIndex, 1);

        // Update the spotlight advertisement with the selected member's name and description
spotlightAd.innerHTML = `<h3>${spotlightMember.membership} Membership: ${spotlightMember.name}</h3>`;
        
        if (spotlightMember.description) {
          spotlightAd.innerHTML += `<p>${spotlightMember.description}</p>`;
        }
      });
    }
  })
  .catch(error => console.error('Error:', error));  // Catch and log any errors that occur during fetching
