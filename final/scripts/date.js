

const year = document.querySelector("#currentYear");
const lastModified = document.querySelector("#lastModified");
const timestamp = document.querySelector("#timestamp")
const timestamp2 = document.querySelector("#timestamp2")
const today = new Date();
const lastMod = document.lastModified;

if (year) {
    year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;
}

if (lastModified) {
    lastModified.textContent = "Last modified: " + document.lastModified;
}
if (timestamp) {
    timestamp.value = new Date();
}
if (timestamp2) {
    timestamp2.value = lastMod;}
