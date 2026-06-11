import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

function ChangeView({ center, zoom }) {
  const map = useMap();

  map.setView(center, zoom);

  return null;
}

export default function HeroSection() {
  const [city, setCity] = useState("");

  const [location, setLocation] = useState({
    lat: 23.2599,
    lon: 77.4126,
  });

  const [weather, setWeather] = useState(null);

  const searchCity = async () => {
    try {
      const geoResponse = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${city}`,
      );

      const geoData = await geoResponse.json();

      if (!geoData.length) {
        alert("City Not Found");
        return;
      }

      const lat = geoData[0].lat;
      const lon = geoData[0].lon;

      const weatherResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c9dcc0cb5af0c05e723eefea84d12810&units=metric`,
      );

      const weatherData = await weatherResponse.json();

      setLocation({
        lat,
        lon,
      });

      setWeather(weatherData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 p-6">
      <h1 className="text-4xl font-bold text-center text-white mb-8">
  🌦️ Weather Explorer
</h1>
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8">
  <input
    type="text"
    placeholder="Enter City"
    value={city}
    onChange={(e) => setCity(e.target.value)}
    className="w-full md:w-80 px-4 py-3 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-sky-500 text-black"
  />

  <button
    onClick={searchCity}
    className="px-6 py-3 bg-sky-500 hover:bg-sky-600 text-white rounded-xl font-semibold transition duration-300"
  >
    Search
  </button>
</div>
      {weather && (
  <div className="max-w-md mx-auto mb-8 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 text-white shadow-xl">
    <h2 className="text-2xl font-bold mb-4 text-center">
      📍 {city}
    </h2>

    <div className="space-y-2">
      <p>🌡️ Temperature: {weather.main.temp} °C</p>
      <p>🌤️ Weather: {weather.weather[0].main}</p>
      <p>💧 Humidity: {weather.main.humidity}%</p>
      <p>💨 Wind Speed: {weather.wind.speed} m/s</p>
    </div>
  </div>
)}

      <MapContainer
        center={[location.lat, location.lon]}
        zoom={5}
        style={{
          height: "500px",
          width: "100%",
          marginTop: "20px",
        }}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap Contributors"
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <ChangeView center={[location.lat, location.lon]} zoom={8} />

        {weather && (
          <Marker position={[location.lat, location.lon]}>
            <Popup>
              📍 {city}
              <br />
              🌡️ {weather.main.temp} °C
              <br />
              🌤️ {weather.weather[0].main}
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
}
