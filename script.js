
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
            let feels_like = data.main.feels_like;
            console.log("feels_like",feels_like);

            const windElement = document.querySelector('[data-humidity]')
            windElement.textContent = humidity;

            const tempratureElement = document.querySelector('[data-temperature]');
            let fornahite = ((temperature - 273.15) * 9 / 5) + 32;
            fornahite = fornahite.toFixed(2);
            tempratureElement.textContent = fornahite; //kelvin to fernahite


            const pressureElement = document.querySelector('[data-pressure]');
            pressureElement.textContent = pressure;

           
            const feels_likeElement = document.querySelector('[data-feels_like]');
            let fornahite2 = ((feels_like - 273.15) * 9 / 5) + 32;
            console.log("fornahite2",fornahite2);
            console.log("feels_like",feels_like);
            fornahite2 = fornahite2.toFixed(2);
            console.log("fornahite2",fornahite2);
            feels_likeElement.textContent = fornahite2; //kelvin to fernahite

        })
        .catch(err => alert("wrong city Name"));
} 