const baseURL =  "https://sogiefa-12.github.io/wdd230/data/links.json";
let linksURL = `${baseURL}`;

async function getLinks() {
    const response = await fetch(linksURL);
    if (response.ok) {
        return response.json();
        displayLinks(weeks);
    } else {
        console.log("Error: could not get data from links.json");
        return false;
    }
}

function displayLinks(weeks) {
    for (let i = 0; i < weeks.length; i++) {
    let week = weeks[i];
    let weekTitle = week.title;
    let weekLinks = week.url;
    const output = `
    <h2>${week} | ${weekTitle} | ${weekLinks}</h2>`;
    }
}