// OpenWeatherMap API key obtained after signing up at https://openweathermap.org/
const ApiKey = '2d693e908875dede8a4ff4669c1dd2bb';

// OpenWeatherMap API endpoint for fetching current weather data by city name in metric units
const ApiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// Link to OpenWeatherMap documentation for current weather data: https://openweathermap.org/current#data 
// API request format for current weather by city name: https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}


//selects the HTML input element inside an element with the class "search" and assigns it to the variable SearchBox:

const SearchBox = document.querySelector(".search input");

// selects the HTML button element inside an element with the class "search" and assigns it to the variable SearchBtn:
const SearchBtn = document.querySelector(".search button");



const checkWeather = async (city) => {
    try {
        // Fetching weather data from OpenWeatherMap API
        const response = await fetch(ApiUrl + city + `&appid=${ApiKey}`);

        // Parsing the JSON data from the API response
        const data = await response.json();

        //if user enterin valid city name => returns alert..!
        if (response.status == 404) {
            alert("invalid city name ");
        }

        // Logging the fetched data in the console
        console.log(data);

        // Updating HTML content with weather information
        document.querySelector(".city").textContent = data.name;
        document.querySelector(".temp").textContent = Math.round(data.main.temp) + "℃";
        document.querySelector(".humidity").textContent = data.main.humidity + "%";
        document.querySelector(".wind").textContent = data.wind.speed + " Km/hr";
    } catch (error) {
        console.error("Error fetching or processing data:", error);
    }
};

// adds a click event listener to the SearchBtn element. When the button is clicked, it executes an arrow function. Inside this function, it calls the checkWeather function with the value of the SearchBox input element.

SearchBtn.addEventListener("click", () => {
    checkWeather(SearchBox.value);
})

// The JavaScript code is retrieving information from the OpenWeatherMap API and then using that information to update the content of HTML elements.

// The `.innerHTML` is a JavaScript property that represents the HTML content inside an HTML element. When you use this property, you can read the content inside an HTML element or make changes to it.

// The line `console.log(document.querySelector(".city").innerHTML)` is logging (printing) the current HTML content inside the element with the class "city" to the console for debugging purposes.
