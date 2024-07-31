
const baseURL = "https://sogiefa-12.github.io/wdd230";
const linksURL = `${baseURL}/data/links.json`;
let weeks = []; // Initialize an empty array
async function getLinksSync(
) {
  try {
    const response = await fetch(linksURL);
    const data = await response.json();

    weeks = data.weeks; // Assign the value here
const output = displayLinks(weeks);
    document.getElementById('weeks').innerHTML += output;
  } catch (error) {
    console.error(error);
  }
}

getLinksSync();

function displayLinks(weeks, searchQuery = '') {
  let output = '';
  const filteredWeeks = weeks.filter(week => {
    const linkTitles = week.links.map(link => link.title);
    return linkTitles.some(title => title.toLowerCase().includes(searchQuery.toLowerCase()));
  });

  filteredWeeks.forEach(week => {
    const { week: title, links } = week;
    let weekLinks = '';

    if (links) {
      const filteredLinks = links.filter(link => link.title.toLowerCase().includes(searchQuery.toLowerCase()));
      weekLinks = filteredLinks.map(link => `<li><a href="${link.url}">${link.title}</a></li>`).join('');
    } else {
      weekLinks = 'No links available';
    }

    output += `
      <div class="week">
        <h2>Week ${title}</h2>
        <ul>${weekLinks}</ul>
      </div>
    `;
  });

  return output;
}

document.getElementById('search-input').addEventListener('input', () => {
  const searchQuery = document.getElementById('search-input').value;
  const output = displayLinks(weeks, searchQuery);
  document.getElementById('weeks').innerHTML = output;
});
