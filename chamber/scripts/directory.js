document.addEventListener('DOMContentLoaded', async () => {
  const gridBtn = document.querySelector('#grid-btn');
  const listBtn = document.querySelector('#list-btn');
  const gridView = document.querySelector('#grid-view');
  const listView = document.querySelector('#list-view');

  const response = await fetch('https://sogiefa-12.github.io/wdd230/data/members.json');
  const members = await response.json();

  gridBtn.addEventListener('click', function (
) {
    gridView.innerHTML = '';
    listView.innerHTML = '';
    displayMembers('grid-view', members);
  });

  listBtn.addEventListener('click', function (
) {
    gridView.innerHTML = '';
    listView.innerHTML = '';
    displayMembers('list-view', members);
  });

  async function displayMembers(viewId, members) {
    const container = document.querySelector(`#${viewId}`);
    container.innerHTML = '';

    members.forEach(member => {
      const card = document.createElement('div');
      card.classList.add('member');

      const image = document.createElement('img');
      image.src = member.image;
      image.classList.add('lazy');
      image.setAttribute('alt', member.name);
      image.addEventListener('load', function (
) {
        image.classList.remove('lazy');
      });

      card.append(image);

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
      yearsP.innerHTML = `<strong>Years:</strong> ${member.years}`;
      card.append(yearsP);

      const websiteLink = document.createElement('a');
      websiteLink.href = member.website;
      websiteLink.textContent = 'Visit Website';
      card.append(websiteLink);

      const websiteP = document.createElement('p');
      websiteP.innerHTML = `<strong>Website:</strong> ${member.website}`;
      card.append(websiteP);

      container.append(card);
    });
  }
});
