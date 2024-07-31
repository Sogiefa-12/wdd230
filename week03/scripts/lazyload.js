let lastModifiedDateElement = document.querySelector('#lastModified');
let date = new Date(document.lastModified);
let day = date.getUTCDate();
let month = date.getUTCMonth() + 1;
let year = date.getUTCFullYear();

lastModifiedDateElement.innerHTML = `Last Modified: ${day}/${month}/${year}`;