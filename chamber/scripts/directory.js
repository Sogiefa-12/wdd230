
document.addEventListener('DOMContentLoaded', async () => {
   const toggleViewBtn = document.querySelector('#toggle-view');
   const gridView = document.querySelector('#grid-view');
   const listView = document.querySelector('#list-view');

   const response = await fetch('./data/members.json');
   const members = await response.json();

   displayMembers("grid-view", members);

   toggleViewBtn.addEventListener('click', function () {
    if (gridView.style.display !== 'none') {
        gridView.style.display = 'none';
        listView.style.display = '';
    }
    else {
        gridView.style.display = '';
        listView.style.display = 'none';
    }
   });

   async function displayMembers(viewId, members){
    const container = document.querySelector(`#${viewId}`);
    container.innerHTML = '';

    members.forEach(member => {
        const card = document.createElement('div');
        card.classList.add('member');

        const title = document.createElement('h3');
        title.textContent = member.name;
        card.append(title);

        const addressP = document.createElement('p');
        addressP.innerHTML = `<strong>Address:</strong> ${member.address}`;
        card.append(addressP);

        const phoneP = document.createElement('p');
        phoneP.innerHTML = `<strong>Phone:</strong> ${member.phone}`;
        card.append(phoneP);

        const membershipP = document.createElement('p');
        membershipP.innerHTML = `<strong>Membership:</strong> ${member.membership}`;
        card.append(membershipP);

        const yearsP = document.createElement('p');
        yearsP.innerHTML = `<strong>Years:</strong>${member.years}`;
        card.append(yearsP);

        const websiteLink = document.createElement('a');
        websiteLink.href = member.website;
        websiteLink.textContent = 'Visit Website';
        card.append(websiteLink);

        container.append(card);

    });
   }
});