const apiKey = 'a9854075d238a8c3e83e544ff046d4c4';
const url = `https://api.openweathermap.org/data/2.5/weather?q=New York City,us&appid=${apiKey}&units=metric`;


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
