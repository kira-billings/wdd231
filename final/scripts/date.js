

const year = document.querySelector("#currentYear");
const lastMod = document.lastModified;
const today = new Date();


year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

document.getElementById("lastModified").textContent = "Last modified: " + lastMod;


// // timestamp for the form must have an input in the html

// document.querySelector("#timestamp").value = new Date();


// const url = "https://nagerholidays.com/api/v4/Holidays/US/2026";

// async function getHolidays() {
//     try {
//         const response = await fetch(url);

//         if (!response.ok) {
//             throw new Error("Could not load holidays");
//         }

//         const holidays = await response.json();

//         console.log(holidays);
//     } catch (error) {
//         console.error(error);
//     }
// }

// getHolidays();