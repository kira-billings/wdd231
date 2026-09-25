
// milliseconds to days constant = 1000 ms/s * 60 s/m * 60 m/h * 24 h/day
const msPerDay = 86400000;

// today's date saved as time stamp in milliseconds automatically does this with date.now
const currentVisit = Date.now();

// retrieves from local storage and assigns to const
const lastVisit = localStorage.getItem("lastVisit");

// element selector into const
const visitTracker = document.querySelector(".visit-tracker");

if (!lastVisit) {

    // Determine if this is the first visit. if the localstorage has nothing it returns null. 
    visitTracker.textContent = "Welcome! Let us know if you have any questions.";

} 
else {
    // for a returning visitor
	
    const previousVisit = Number(lastVisit);

    const difference = currentVisit - previousVisit;

    const daysSinceVisit = Math.floor(difference / msPerDay);

    if (daysSinceVisit < 1) {
        visitTracker.textContent = "Back so soon! Awesome!";
    } else if (daysSinceVisit === 1) {
        visitTracker.textContent = `You last visited ${daysSinceVisit} day ago.`;
    } else {
        visitTracker.textContent = `You last visited ${daysSinceVisit} days ago.`;
    }
}

localStorage.setItem("lastVisit", currentVisit);