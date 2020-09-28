var zip = ""
var month = new Date();
var numMonth = (month.getMonth()+1)

document.getElementById("content").style.visibility = "hidden"












if(numMonth == 9 || numMonth == 10 || numMonth == 11){
    document.getElementById("season").src = "./img/fall.jpg";
}
else if(numMonth == 6 || numMonth == 7 || numMonth == 8){
    document.getElementById("season").src = "./img/summer.jpg";
}
else if(numMonth == 1 || numMonth == 2 || numMonth == 12){
    document.getElementById("season").src = "./img/winter.jpg";
}
else{
    document.getElementById("season").src = "./img/spring.jpg";
}






function getZip() {
    var userInput = document.getElementById("userInput").value;
    zip = "http://api.openweathermap.org/data/2.5/weather?zip="+userInput+"&appid=d02c4a194c15c23d8256f9f384c418a3"

fetch(zip)
.then((resp) => resp.json()) // Transform the data into json
.then(function(data) {
  console.log(data)
  document.getElementById("content").style.visibility = "initial"
  document.getElementById("cityName").innerHTML = data.name
  document.getElementById("kelv").innerHTML = (Math.round(data.main.temp)) + " K"
  document.getElementById("far").innerHTML = Math.round(((data.main.temp)*(9/5)-459.67)) + " F"
  document.getElementById("cels").innerHTML = Math.round((data.main.temp)-273.15) + " C"
  document.getElementById("condName").innerHTML = data.weather[0].description
  var iconVal = data.weather[0].id
  if(iconVal < 600 && iconVal > 499){
    document.getElementById("icon").className = "fas fa-cloud-showers-heavy";
  }
  else if(iconVal < 400 && iconVal > 299){
    document.getElementById("icon").className = "fas fa-cloud-rain";
  }
  else if(iconVal < 300 && iconVal > 99){
    document.getElementById("icon").className = "fas fa-poo-storm";
  }
  else if(iconVal < 700 && iconVal > 499){
    document.getElementById("icon").className = "fas fa-snowflake";
  }
  else if(iconVal < 900 && iconVal > 800){
    document.getElementById("icon").className = "fas fa-cloud";
  }
  else{
    document.getElementById("icon").className = "fas fa-sun";
  }
  
  })
  .catch(function(error) {
    alert("You have entered an invalid Zip!");
    document.getElementById("cityName").innerHTML = "N/A"
    document.getElementById("kelv").innerHTML = "N/A"
    document.getElementById("far").innerHTML = "N/A"
    document.getElementById("cels").innerHTML = "N/A"
    document.getElementById("condName").innerHTML = "N/A"
    document.getElementById("content").style.visibility = "hidden"
    });
}