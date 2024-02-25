// const apiKey="b4d4707f447958d237baa5c6540839aa";
// const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// const searchBox=document.querySelector(".search input");
// const searchBht=document.querySelector(".search button");

// async function checkWeather(city){
//     const response=await fetch(apiUrl+city+`&appid=${apiKey}`);
//     var data=await response.json();
//     console.log(data);
//     document.querySelector(".city").innerHTML=data.name;
//     document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
//     document.querySelector(".humidity").innerHTML=data.main.humidity ="%";
//     document.querySelector(".wind").innerHTML=data.wind.speed +" km/h";   
// }

// searchBht.addEventListener("click", ()=> {
//  checkWeather(searchBox.value);
// })

// checkWeather();