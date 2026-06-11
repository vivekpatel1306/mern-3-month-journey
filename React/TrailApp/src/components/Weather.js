const API_KEY = "c9dcc0cb5af0c05e723eefea84d12810"; 
const CITY = "Indore";
const URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`;

async function verifyWeatherAPI() {
    try {
        const response = await fetch(URL);
        
        if (!response.ok) {
            // Catches errors like 401 (Invalid Key) or 404 (City Not Found)
            throw new Error(`API Error: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();
        console.log("✅ API Key is Valid!");
        console.log(`Weather in ${data.name}: ${data.weather[0].description}`);
        console.log(`Current Temperature: ${data.main.temp}°C`);
        
    } catch (error) {
        console.error("❌ Verification Failed:");
        console.error(error.message);
    }
}

verifyWeatherAPI();