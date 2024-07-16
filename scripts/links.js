

const baseURL =  "https://sogiefa-12.github.io/wdd230";
let linksURL = `${baseURL}/data/links.json`;

async function getLinksSync() {
    try {
        const response = await fetch(linksURL);
        const data = await response.json();
        console.log(data);
        
        const weeks = Object.values(data);

        const output = displayLinks(weeks);
        document.getElementById('weeks').innerHTML += output;
    } catch (error) {
        console.error(error);
    }
}

getLinksSync();

function displayLinks(weeks) {
    let output = "";

    weeks.forEach(week => {
        const { title, url } = week;
        let weekLinks = "";
        
        if (url) {
            weekLinks = url.map(link => `<li><a href="${link.url}">${link.title}</a></li>`).join('');
        } else {
            weekLinks = "No links available";
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