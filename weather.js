const apiKey = "4e5e576e864142e780a45600252403";
const city = "Cancun";
const units = "metric";

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error("Weather data not available.");
    }
    return response.json();
  })
  .then(data => {
    const temp = data.main.temp.toFixed(1);
    const desc = data.weather[0].description;
    const icon = data.weather[0].icon;

    const html = `
      <h3>Weather in ${city}</h3>
      <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="${desc}" />
      <p><strong>${temp}°C</strong></p>
      <p>${desc.charAt(0).toUpperCase() + desc.slice(1)}</p>
    `;
    document.getElementById("weather-widget").innerHTML = html;
  })
  .catch(error => {
    document.getElementById("weather-widget").innerHTML = "<p>Unable to load weather data.</p>";
    console.error(error);
  });
