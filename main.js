var zip = ""
var month = new Date();
//gets the current month
var numMonth = (month.getMonth()+1)

//hides the content section on load
document.getElementById("content").style.visibility = "hidden"

//decides the image to display based on the curent month
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





//calling API 
function getZip() {
  //assigning variable to user input so it can be used in ther
    var userInput = document.getElementById("userInput").value;
    zip = "https://api.openweathermap.org/data/2.5/weather?zip="+userInput+"&appid=d02c4a194c15c23d8256f9f384c418a3"

fetch(zip)
.then((resp) => resp.json()) // Transform the data into json
.then(function(data) {
  //displays data from API
  document.getElementById("content").style.visibility = "initial"
  document.getElementById("cityName").innerHTML = data.name
  document.getElementById("kelv").innerHTML = (Math.round(data.main.temp)) + " K"
  document.getElementById("far").innerHTML = Math.round(((data.main.temp)*(9/5)-459.67)) + " F"
  document.getElementById("cels").innerHTML = Math.round((data.main.temp)-273.15) + " C"
  document.getElementById("condName").innerHTML = data.weather[0].description
  
  
  //displays icon based on condition code
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


  //When there is no info sent back from API, dipslay error prompt and hide content
  .catch(function(error) {
    alert("You have entered an invalid Zip!");
  
    document.getElementById("content").style.visibility = "hidden"
    });
}

