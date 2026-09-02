const currentWeatherContainer = document.querySelector(".current-weather-container");
const forecastWeatherContainer = document.querySelector(".forecast-weather-container");

const weatherUrl = "https://api.openweathermap.org/data/2.5/weather?lat=36.20&lon=-115.12&appid=165bb844619f7173c0f884c79f71a21e&units=imperial";

const forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=36.20&lon=-115.12&appid=165bb844619f7173c0f884c79f71a21e&units=imperial"

async function apiFetch() {
    try {
        const responseW = await fetch(weatherUrl);
        const responseF = await fetch(forecastUrl);

        if (!responseW.ok || !responseF.ok) {
            throw new Error(
                `Current status ${responseW.status}, Forecast status: ${responseF.status}`
            );
        }
        const dataW = await responseW.json();
        const dataF = await responseF.json();
        console.log(dataW);
        console.log(dataF);

        return { dataW, dataF };

    } catch (error) {
        console.log(error);
    } 
}

async function startWeather() {
    const {dataW, dataF } = await apiFetch();
    
    const currentCard = buildWeatherCard(dataW);

    const threeDayForecast = dataF.list
    .filter(item => item.dt_txt.includes("18:00:00"))
    .slice(0, 3);

    console.log(threeDayForecast);
    console.log(threeDayForecast[0]);
    console.log(threeDayForecast[1]);
    console.log(threeDayForecast[2]);


    threeDayForecast.forEach(day => {
    buildWeatherCard(day);

    currentWeatherContainer.appendChild(currentCard);
    

    });

}


// build a weather card
function buildWeatherCard(data) {
    const weatherCard = document.createElement("div")
    const weatherDate = document.createElement("p");
    const weatherTemp = document.createElement("p");
    const weatherIcon = document.createElement ("img"); 
    const weatherCaptionDesc = document.createElement("figcaption");

    weatherCard.classList.add("weather-card")
    weatherDate.classList.add("weather-date")
    weatherTemp.classList.add("weather-temp")
    weatherIcon.classList.add("weather-icon")
    weatherCaptionDesc.classList.add("weather-caption-description")

    weatherIcon.setAttribute('src',
         `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    );
    weatherIcon.setAttribute('alt', data.weather[0].description); 
    weatherIcon.setAttribute('loading', 'lazy');

    const date = new Date(data.dt * 1000);
    weatherDate.textContent = date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric"
    });
    weatherTemp.innerHTML = `${Math.round(data.main.temp)}°F`;
    weatherCaptionDesc.textContent = data.weather[0].description.charAt(0).toUpperCase() +
    data.weather[0].description.slice(1);

    weatherCard.appendChild(weatherDate);
    weatherCard.appendChild(weatherTemp);
    weatherCard.appendChild(weatherIcon);
    weatherCard.appendChild(weatherCaptionDesc);

    forecastWeatherContainer.appendChild(weatherCard)
    return weatherCard;
}

startWeather();






