
console.log("hello nishu");

function apiCall() {
    let city = document.getElementById('city-search').value;
    let apiKey = 'APPID=a024a34843bcf7c66ed9cfaba65cff91';
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=a024a34843bcf7c66ed9cfaba65cff91')
        .then(respnse => respnse.json())
        .then(data => {
            let humidity = data.main.humidity;
            let temperature = data.main.temp;
            let pressure = data.main.pressure;

            const windElement = document.querySelector('[data-humidity]')
            windElement.textContent = humidity;

            const tempratureElement = document.querySelector('[data-temperature]');
            let fornahite = ((temperature - 273.15) * 9 / 5) + 32;
            fornahite = fornahite.toFixed(2);
            tempratureElement.textContent = fornahite; //kelvin to fernahite


            const pressureElement = document.querySelector('[data-pressure]');
            pressureElement.textContent = pressure;
        })
        .catch(err => alert("wrong city Name"));
} 