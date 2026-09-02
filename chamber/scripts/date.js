

const year = document.querySelector("#currentYear");

document.getElementById("lastModified").innerHTML = document.lastModified;

const today = new Date();

year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

const lastMod = document.lastModified;
document.getElementById("lastModified").textContent = "Last modified: " + lastMod;


// timestamp for the form

document.querySelector("#timestamp").value = new Date();