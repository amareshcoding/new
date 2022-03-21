async function getData() {
  try {
    let city = document.querySelector("#city").value;
    let res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=aa47420846e9d103bcf81df633f13bdb&units=metric`
    );
    let data = await res.json();
    appendData(data);
    showImage(data);
    console.log("data", data);
  } catch (err) {
    console.log("err", err);
  }
}

function appendData(data) {
  let wdiv = document.querySelector("#wdiv");
  let x = "";
  x += `
     <h5>Weather Information</h5>
     <h5>City: ${data.name} in ${data.sys.country}</h5>
     <h5>Time: ${data.timezone} IST</h5>
     <h5>Temperature: ${data.main.temp}°C</h5>
     <h5>Pressure: ${data.main.pressure}</h5>
     <h5>Humidity: ${data.main.humidity}</h5>`;
  console.log("hh");
  wdiv.innerHTML = x;
}
function showImage(data) {
  let mapdiv = document.querySelector("#mapbox");
  let y = "";
  y += `<iframe
      class="gmap_iframe" 
     frameborder="0" 
     scrolling="no" 
     marginheight="0"
     marginwidth="0" 
     src="https://maps.google.com/maps?;hl=en&amp;q=${data.name}&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
     </iframe>`;
  mapdiv.innerHTML = y;
}
