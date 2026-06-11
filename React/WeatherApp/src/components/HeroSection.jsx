import { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap
} from "react-leaflet";

function ChangeView({ center, zoom }) {
  const map = useMap();

  map.setView(center, zoom);

  return null;
}

export default function HeroSection() {
  const [city, setCity] = useState("");

  const [location, setLocation] = useState({
    lat: 23.2599,
    lon: 77.4126
  });

  const [weather, setWeather] = useState(null);

  const searchCity = async () => {
    try {
      const geoResponse = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${city}`
      );

      const geoData = await geoResponse.json();

      if (!geoData.length) {
        alert("City Not Found");
        return;
      }

      const lat = geoData[0].lat;
      const lon = geoData[0].lon;

      const weatherResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c9dcc0cb5af0c05e723eefea84d12810&units=metric`
      );

      const weatherData = await weatherResponse.json();

      setLocation({
        lat,
        lon
      });

      setWeather(weatherData);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>

      <input
        type="text"
        placeholder="Enter City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button onClick={searchCity}>
        Search
      </button>

      <MapContainer
        center={[location.lat, location.lon]}
        zoom={5}
        style={{
          height: "500px",
          width: "100%",
          marginTop: "20px"
        }}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap Contributors"
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <ChangeView
          center={[location.lat, location.lon]}
          zoom={8}
        />

        {weather && (
          <Marker
            position={[location.lat, location.lon]}
          >
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

      {weather && (
        <div style={{ marginTop: "20px" }}>
          <p>City: {city}</p>
          <p>Temperature: {weather.main.temp} °C</p>
          <p>Weather: {weather.weather[0].main}</p>
        </div>
      )}

    </div>
  );
}