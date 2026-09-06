

const year = document.querySelector("#currentYear");
const lastMod = document.lastModified;
const today = new Date();


year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

document.getElementById("lastModified").textContent = "Last modified: " + lastMod;


// timestamp for the form must have an input in the html

document.querySelector("#timestamp").value = new Date();
