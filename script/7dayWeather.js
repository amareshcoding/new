async function getData() {
  try {
    let city = document.querySelector("#city").value;
    let res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=aa47420846e9d103bcf81df633f13bdb&units=metric`
    );
    let data = await res.json();
    getFor7Day(data.coord.lat, data.coord.lon);
    // console.log("data",data)
    // console.log(data.coord.lat,data.coord.lon)
  } catch (err) {
    console.log("err", err);
  }
}
async function getFor7Day(lat, lon) {
  try {
    //http://localhost:4500/user
    let res7days = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=aa47420846e9d103bcf81df633f13bdb&units=metric`
    );
    let data7days = await res7days.json();

    appendWork(data7days.daily);
    console.log("data7days", data7days);
  } catch (err) {
    console.log("err", err);
  }
}
function appendWork(arr) {
  let appendDiv = document.querySelector("#box3");
  let html = "";
  arr.forEach(function (el, ind) {
    let days = [
      "Monday",
      "Tuesday",
      "Wednessday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    let date = new Date(el.dt * 1000);
    let day = date.getDay();
    if (ind !== 0) {
      html += `<div class="nextDay">
                 <h5>${days[day]}</h5>
                 <p>MaxTemp: ${el.temp.max}°C</p>
                 <p>MinTemp: ${el.temp.min}°C</p>
             </div>`;
    }
  });
  appendDiv.innerHTML = html;
}
