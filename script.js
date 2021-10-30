const changeBackOne = document.querySelector(".win");
const changeBackTwo = document.querySelector(".spr");
const changeBackThree = document.querySelector(".sum");
const changeBackFour = document.querySelector(".aut");

changeBackOne.addEventListener("click", function() {    
    document.body.style.backgroundImage = "url(winter.jpg)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundColor = "rgb(66, 66, 189)";
});
changeBackTwo.addEventListener("click", function() {    
    document.body.style.background = 'url(spring.jpg)';
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundColor = "rgb(161, 127, 161)";
});
changeBackThree.addEventListener("click", function() {    
    document.body.style.background = 'url(summer.jpg)';
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundColor = "rgb(128, 110, 78)";
});
changeBackFour.addEventListener("click", function() {    
    document.body.style.background = 'url(autumn.jpg)';
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundColor = "rgb(139, 48, 44)";
})

// City selection- - - - - - - -

const api = {
    endpoint: "https://api.openweathermap.org/data/2.5/",
    key: "3f01f1413fa172ef0a61dd3e36dde7ed"
}
const input = document.querySelector("#input");
input.addEventListener("keypress", enter);

const str = "https://ipdata.co/flags/ca.png";

function enter(e) {
    if(e.keyCode === 13) {
        getInfo(input.value);
    }
}

async function getInfo(data) {
    const res = await fetch(`${api.endpoint}weather?q=${data}&units=metric&appID=${api.key}`);
    const result = await res.json();

    displayResult(result);
}
function displayResult(result) {
    
    let city = document.querySelector("#city");
    city.textContent = `${result.name}`+', '+`${result.sys.country}`;

    let country = document.querySelector("#country");
    country.textContent = `${result.sys.country}`;

    // let countryCode = `${result.sys.country}`.toLowerCase();
    // console.log(countryCode);        

    getOurDate();

    let temperature = document.querySelector("#temperature");
    temperature.innerHTML = `${Math.round(result.main.temp)}<span>°</span>`;

    let feelsLike = document.querySelector("#feelslike");
    feelsLike.innerHTML = "Feels like: "+`${Math.round(result.main.feels_like)}<span>°</span>`;

    let humidity = document.querySelector("#humidity");
    humidity.innerHTML = "Humidity: "+`${Math.round(result.main.humidity)}<span>%</span>`;

    let conditions = document.querySelector("#conditions");
    conditions.textContent = `${result.weather[0].main}`;

    let wind = document.querySelector("#wind");
    wind.innerHTML = "Wind: "+`${Math.round(result.wind.speed)}<span>m/s</span>`;

    let variation = document.querySelector("#variation");
    variation.innerHTML = "Min: "+ `${Math.round(result.main.temp_min)}<span>°</span>`+ " " + " Max: "+`${Math.round(result.main.temp_max)}<span>°</span>`;
}

function getOurDate(){
    const myDate = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let day = days[myDate.getDay()];

    let todayDate = myDate.getDate();

    let month = months[myDate.getMonth()];

    let year = myDate.getFullYear();

    let showDate = document.querySelector("#date");
    showDate.textContent = `${day}`+" "+`${todayDate}`+" "+`${month}`+" "+`${year}`
}

