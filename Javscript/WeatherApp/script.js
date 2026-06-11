// Initialize map
// const apiKey=CONFIG.apiKey
const map = L.map("map").setView(
    [23.2599, 77.4126],
    5
);
L.tileLayer(
    "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
        attribution:
            "&copy; OpenStreetMap Contributors"
    }
).addTo(map);
let currentMarker = null
document
    .getElementById("searchBtn")
    .addEventListener("click",searchCity);

async function searchCity() {
    const city = document.getElementById("city").value
    const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${city}`)
    const data = await response.json();
const temp=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c9dcc0cb5af0c05e723eefea84d12810&units=metric`)

const tempData=await temp.json()
    if (data.length > 0) {
        const lat = data[0].lat
        const lon = data[0].lon
        if (currentMarker !== null) {
            map.removeLayer(currentMarker)
        }
        map.setView([lat, lon], 8)
        currentMarker = L.marker([lat, lon]).
        addTo(map)
        currentMarker.bindPopup(`📍  ${city} <br>
            🌡️  ${tempData.main.temp} <br>
            🌤️  ${tempData.weather[0].main}

            `).
        openPopup();
        const html=`
    <p>City is : ${city}</p>
    <p>Temperature is : ${tempData.main.temp}</p>
    <p>Weather is : ${tempData.weather[0].main}</p>
    `
    document.getElementById("data").innerHTML=html
    }
    else{
        alert("City not FOund")
    }
}

