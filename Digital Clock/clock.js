function currentTime() {
  var date = new Date();
   var h = date.getHours();
   var m = date.getMinutes();
   var s = date.getSeconds();
    h = updateTime(h);
    m = updateTime(m);
    s = updateTime(s);
    var midday= "AM";
	midday = (h>=12)? "PM" : "AM" ;
    h = (h==0) ? 12 : ((h > 12) ? (h - 12) : h); 
   document.getElementById('clock').innerHTML = h + ":" + m + ":" + s + " " + midday;
  var t = setTimeout(function(){
  	currentTime() }, 1000);
} 


function updateTime(k){
	if(k<10){
		return "0" + k;
	}
	else{
		return k;
	}
}

function greetingDay() {
  var greeting;
  var time = new Date().getHours();
  if (time < 12) {
    greeting = "Good Morning";
  } else if (time >= 12 && time<=17) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }
  document.getElementById("greet").innerHTML = greeting;
}
function getDay(){
	var today= new Date();
	var d=today.getDate();
	var mon=['January', 'February','March','May','June','July','August','September','October'
	,'November','December'];
	var month=mon[today.getMonth()];
	var y=today.getFullYear();
	document.getElementById("date").innerHTML=d + " " + month + " " + y;
}

greetingDay();
currentTime(); 
getDay();
