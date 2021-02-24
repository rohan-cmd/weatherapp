// weather variable
const submitBtn = document.getElementById('submit');
const cityName = document.getElementById('cityName');
const cityN = document.getElementById('city_name');
const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');
let realData = "";
// to remove and add data hide class
const dataHide = document.querySelector('.middle_layer')

// Weather
const getInfo = async (event) => {
    event.preventDefault();
    let cityVal = cityName.value;
    const api = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=3207174414161f2bd5a0461b03f8f112`;
    if (cityVal === "") {
        cityN.innerText = `Please Write City Name Before Search`;
        // to remove and add data hide class
        dataHide.classList.add('data_hidden');
    } else {
        try {
            let data = await fetch(api);
            realData = await data.json();
            let arrRealData = [realData];
            let temperature = arrRealData[0].main.temp;
            let weather = arrRealData[0].weather[0].main;
            temp.innerHTML = `${temperature}<sup>o</sup>C`;
            temp_status.innerHTML = `${weather}`;
            cityN.innerHTML = `${arrRealData[0].name},${arrRealData[0].sys.country}`;
            // to remove and add data hide class
            dataHide.classList.remove('data_hidden');
        } catch { 
            cityN.innerText = `Some Error Occured`;
            // to remove and add data hide class 
            dataHide.classList.add('data_hidden');}
    }
    cityVal = '';
};

submitBtn.addEventListener('click', getInfo);

// date 
// date variable
const day = document.getElementById('day');
const date = document.getElementById('date');

var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var weekday = ["Sun", "Mon", "Tues", "Wed", "Thi", "Fri", "Sat"];

let currTime = new Date();

let currmonth = months[currTime.getMonth()];
let currday = weekday[currTime.getDay()];
let currdate = currTime.getDate();

day.innerText = currday;
date.innerText = `${currdate} ${currmonth}`