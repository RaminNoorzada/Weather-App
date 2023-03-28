const apiKey = 'YOUR_API_KEY';
const url = `https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${apiKey}&units=metric`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    const location = data.name;
    const temperature = data.main.temp;
    const description = data.weather[0].description;

    document.getElementById('location').textContent = `Location: ${location}`;
    document.getElementById('temperature').textContent = `Temperature: ${temperature}°C`;
    document.getElementById('description').textContent = `Description: ${description}`;
  })
  .catch(error => console.log(error));
