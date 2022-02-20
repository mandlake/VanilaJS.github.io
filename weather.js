const API_KEY = "6252d894ae60a42b1e8d20655019c3a7";

function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const weatherContainer = document.querySelector("#weather span:first-child");
        const cityContainer = document.querySelector("#weather span:last-child");
        cityContainer.innerText = data.name;
        weatherContainer.innerText = `${data.weather[0].main} / ${data.main.temp}도`;
    });
}

function onGeoError() {
    alert("Can't find you. No Weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);